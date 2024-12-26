use crate::misc::schema_generated::ws_api;
use axum::extract::ws::{Message, WebSocket};
use futures_util::StreamExt;
use log::{info, warn};
use std::collections::HashMap;

pub struct Remote {
    pub remote_address: String,
    socket: WebSocket,
}

impl Drop for Remote {
    fn drop(&mut self) {
        self.cleanup();
    }
}

impl Remote {
    pub fn new(remote_address: String, socket: WebSocket) -> Remote {
        Remote { remote_address, socket }
    }
    pub async fn listen(&mut self) {
        // .next() uses futures_util::StreamExt
        while let Some(Ok(message)) = self.socket.next().await {
            match message {
                Message::Ping(ping) => {
                    if self.socket.send(Message::Pong(ping)).await.is_err() {
                        return;
                    }
                }
                Message::Text(text) => info!("{} ws message/text: {}", self.remote_address, text),
                Message::Binary(bin) => {
                    let Some(data) = flatbuffers::root::<ws_api::Message>(&bin).ok() else {
                        warn!("Failed to parse message, message are supposed to be flatbuffers matching the schema of the websocket API");
                        return;
                    };
                    match data.action() {
                        ws_api::Action::CM_BROADCAST => {
                            info!("{} broadcast message", self.remote_address);
                        }
                        ws_api::Action::SR_INIT_CONSUMER => {
                            info!("{} init consumer", self.remote_address);
                        }
                        _ => info!("unimplemented {:?}, requested by {}", data.action().variant_name(), self.remote_address),
                    }
                }
                _ => break,
            }
        }
    }
    pub fn cleanup(&self) {}
}
