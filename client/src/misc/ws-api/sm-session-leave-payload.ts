// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class SmSessionLeavePayload {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SmSessionLeavePayload {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSmSessionLeavePayload(bb:flatbuffers.ByteBuffer, obj?:SmSessionLeavePayload):SmSessionLeavePayload {
  return (obj || new SmSessionLeavePayload()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSmSessionLeavePayload(bb:flatbuffers.ByteBuffer, obj?:SmSessionLeavePayload):SmSessionLeavePayload {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SmSessionLeavePayload()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id():string|null
id(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
id(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startSmSessionLeavePayload(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static endSmSessionLeavePayload(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSmSessionLeavePayload(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset):flatbuffers.Offset {
  SmSessionLeavePayload.startSmSessionLeavePayload(builder);
  SmSessionLeavePayload.addId(builder, idOffset);
  return SmSessionLeavePayload.endSmSessionLeavePayload(builder);
}
}
