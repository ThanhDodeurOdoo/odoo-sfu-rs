#![allow(clippy::module_name_repetitions)]
#![allow(clippy::expect_used)]
use std::env;
use std::env::temp_dir;
use std::path::PathBuf;
use std::sync::LazyLock;
use std::thread;
use std::time::Duration;

pub static AUTH_KEY: LazyLock<String> =
    LazyLock::new(|| env::var("AUTH_KEY").expect("AUTH_KEY environment variable not set"));
pub static PUBLIC_IP: LazyLock<String> =
    LazyLock::new(|| env::var("PUBLIC_IP").expect("PUBLIC_IP environment variable not set"));
pub static RTC_INTERFACE: LazyLock<String> = LazyLock::new(|| {
    env::var("RTC_INTERFACE").expect("RTC_INTERFACE environment variable not set")
});
pub static PROXY: LazyLock<bool> = LazyLock::new(|| env::var("PROXY").is_ok());
pub static HTTP_INTERFACE: LazyLock<String> = LazyLock::new(|| {
    env::var("HTTP_INTERFACE").expect("HTTP_INTERFACE environment variable not set")
});
pub static PORT: LazyLock<u16> = LazyLock::new(|| {
    env::var("PORT").ok().and_then(|port_str| port_str.parse::<u16>().ok()).unwrap_or(8070)
});
pub static NUM_WORKERS: LazyLock<u16> = LazyLock::new(|| {
    // could be usize type?
    let env_workers =
        env::var("NUM_WORKERS").ok().and_then(|num| num.parse::<u16>().ok()).unwrap_or(u16::MAX);

    let available_workers = thread::available_parallelism().map(|n| n.get() as u16).unwrap_or(1);

    env_workers.min(available_workers)
});

// should be called early to make sure that these variables are available at runtime.
pub fn initialize_required_globals() {
    LazyLock::force(&AUTH_KEY);
    LazyLock::force(&PUBLIC_IP);
    LazyLock::force(&RTC_INTERFACE);
    LazyLock::force(&HTTP_INTERFACE);
}

// TODO continue reimplementing https://github.com/odoo/sfu/blob/master/src/config.js
