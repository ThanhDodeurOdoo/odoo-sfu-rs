// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class CmConsumptionChangePayload {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):CmConsumptionChangePayload {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCmConsumptionChangePayload(bb:flatbuffers.ByteBuffer, obj?:CmConsumptionChangePayload):CmConsumptionChangePayload {
  return (obj || new CmConsumptionChangePayload()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCmConsumptionChangePayload(bb:flatbuffers.ByteBuffer, obj?:CmConsumptionChangePayload):CmConsumptionChangePayload {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CmConsumptionChangePayload()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id():string|null
id(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
id(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startCmConsumptionChangePayload(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static endCmConsumptionChangePayload(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createCmConsumptionChangePayload(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset):flatbuffers.Offset {
  CmConsumptionChangePayload.startCmConsumptionChangePayload(builder);
  CmConsumptionChangePayload.addId(builder, idOffset);
  return CmConsumptionChangePayload.endCmConsumptionChangePayload(builder);
}
}