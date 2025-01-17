// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import { CmBroadcastPayload } from '../ws-api/cm-broadcast-payload.js';
import { CmConsumptionChangePayload } from '../ws-api/cm-consumption-change-payload.js';
import { CmInfoChangePayload } from '../ws-api/cm-info-change-payload.js';
import { CmProducerChangePayload } from '../ws-api/cm-producer-change-payload.js';
import { CrConnectCtsTransportPayload } from '../ws-api/cr-connect-cts-transport-payload.js';
import { CrConnectStcTransportPayload } from '../ws-api/cr-connect-stc-transport-payload.js';
import { CrInitProducerPayload } from '../ws-api/cr-init-producer-payload.js';
import { SmBroadcastPayload } from '../ws-api/sm-broadcast-payload.js';
import { SmInfoChangePayload } from '../ws-api/sm-info-change-payload.js';
import { SmSessionLeavePayload } from '../ws-api/sm-session-leave-payload.js';
import { SrInitConsumerPayload } from '../ws-api/sr-init-consumer-payload.js';
import { SrInitTransportsPayload } from '../ws-api/sr-init-transports-payload.js';


export enum Content {
  NONE = 0,
  SrInitConsumerPayload = 1,
  SrInitTransportsPayload = 2,
  SmBroadcastPayload = 3,
  SmSessionLeavePayload = 4,
  SmInfoChangePayload = 5,
  CrConnectCtsTransportPayload = 6,
  CrConnectStcTransportPayload = 7,
  CrInitProducerPayload = 8,
  CmBroadcastPayload = 9,
  CmConsumptionChangePayload = 10,
  CmInfoChangePayload = 11,
  CmProducerChangePayload = 12
}

export function unionToContent(
  type: Content,
  accessor: (obj:CmBroadcastPayload|CmConsumptionChangePayload|CmInfoChangePayload|CmProducerChangePayload|CrConnectCtsTransportPayload|CrConnectStcTransportPayload|CrInitProducerPayload|SmBroadcastPayload|SmInfoChangePayload|SmSessionLeavePayload|SrInitConsumerPayload|SrInitTransportsPayload) => CmBroadcastPayload|CmConsumptionChangePayload|CmInfoChangePayload|CmProducerChangePayload|CrConnectCtsTransportPayload|CrConnectStcTransportPayload|CrInitProducerPayload|SmBroadcastPayload|SmInfoChangePayload|SmSessionLeavePayload|SrInitConsumerPayload|SrInitTransportsPayload|null
): CmBroadcastPayload|CmConsumptionChangePayload|CmInfoChangePayload|CmProducerChangePayload|CrConnectCtsTransportPayload|CrConnectStcTransportPayload|CrInitProducerPayload|SmBroadcastPayload|SmInfoChangePayload|SmSessionLeavePayload|SrInitConsumerPayload|SrInitTransportsPayload|null {
  switch(Content[type]) {
    case 'NONE': return null; 
    case 'SrInitConsumerPayload': return accessor(new SrInitConsumerPayload())! as SrInitConsumerPayload;
    case 'SrInitTransportsPayload': return accessor(new SrInitTransportsPayload())! as SrInitTransportsPayload;
    case 'SmBroadcastPayload': return accessor(new SmBroadcastPayload())! as SmBroadcastPayload;
    case 'SmSessionLeavePayload': return accessor(new SmSessionLeavePayload())! as SmSessionLeavePayload;
    case 'SmInfoChangePayload': return accessor(new SmInfoChangePayload())! as SmInfoChangePayload;
    case 'CrConnectCtsTransportPayload': return accessor(new CrConnectCtsTransportPayload())! as CrConnectCtsTransportPayload;
    case 'CrConnectStcTransportPayload': return accessor(new CrConnectStcTransportPayload())! as CrConnectStcTransportPayload;
    case 'CrInitProducerPayload': return accessor(new CrInitProducerPayload())! as CrInitProducerPayload;
    case 'CmBroadcastPayload': return accessor(new CmBroadcastPayload())! as CmBroadcastPayload;
    case 'CmConsumptionChangePayload': return accessor(new CmConsumptionChangePayload())! as CmConsumptionChangePayload;
    case 'CmInfoChangePayload': return accessor(new CmInfoChangePayload())! as CmInfoChangePayload;
    case 'CmProducerChangePayload': return accessor(new CmProducerChangePayload())! as CmProducerChangePayload;
    default: return null;
  }
}

export function unionListToContent(
  type: Content, 
  accessor: (index: number, obj:CmBroadcastPayload|CmConsumptionChangePayload|CmInfoChangePayload|CmProducerChangePayload|CrConnectCtsTransportPayload|CrConnectStcTransportPayload|CrInitProducerPayload|SmBroadcastPayload|SmInfoChangePayload|SmSessionLeavePayload|SrInitConsumerPayload|SrInitTransportsPayload) => CmBroadcastPayload|CmConsumptionChangePayload|CmInfoChangePayload|CmProducerChangePayload|CrConnectCtsTransportPayload|CrConnectStcTransportPayload|CrInitProducerPayload|SmBroadcastPayload|SmInfoChangePayload|SmSessionLeavePayload|SrInitConsumerPayload|SrInitTransportsPayload|null, 
  index: number
): CmBroadcastPayload|CmConsumptionChangePayload|CmInfoChangePayload|CmProducerChangePayload|CrConnectCtsTransportPayload|CrConnectStcTransportPayload|CrInitProducerPayload|SmBroadcastPayload|SmInfoChangePayload|SmSessionLeavePayload|SrInitConsumerPayload|SrInitTransportsPayload|null {
  switch(Content[type]) {
    case 'NONE': return null; 
    case 'SrInitConsumerPayload': return accessor(index, new SrInitConsumerPayload())! as SrInitConsumerPayload;
    case 'SrInitTransportsPayload': return accessor(index, new SrInitTransportsPayload())! as SrInitTransportsPayload;
    case 'SmBroadcastPayload': return accessor(index, new SmBroadcastPayload())! as SmBroadcastPayload;
    case 'SmSessionLeavePayload': return accessor(index, new SmSessionLeavePayload())! as SmSessionLeavePayload;
    case 'SmInfoChangePayload': return accessor(index, new SmInfoChangePayload())! as SmInfoChangePayload;
    case 'CrConnectCtsTransportPayload': return accessor(index, new CrConnectCtsTransportPayload())! as CrConnectCtsTransportPayload;
    case 'CrConnectStcTransportPayload': return accessor(index, new CrConnectStcTransportPayload())! as CrConnectStcTransportPayload;
    case 'CrInitProducerPayload': return accessor(index, new CrInitProducerPayload())! as CrInitProducerPayload;
    case 'CmBroadcastPayload': return accessor(index, new CmBroadcastPayload())! as CmBroadcastPayload;
    case 'CmConsumptionChangePayload': return accessor(index, new CmConsumptionChangePayload())! as CmConsumptionChangePayload;
    case 'CmInfoChangePayload': return accessor(index, new CmInfoChangePayload())! as CmInfoChangePayload;
    case 'CmProducerChangePayload': return accessor(index, new CmProducerChangePayload())! as CmProducerChangePayload;
    default: return null;
  }
}
