// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class CmInfoChangePayload {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):CmInfoChangePayload {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCmInfoChangePayload(bb:flatbuffers.ByteBuffer, obj?:CmInfoChangePayload):CmInfoChangePayload {
  return (obj || new CmInfoChangePayload()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCmInfoChangePayload(bb:flatbuffers.ByteBuffer, obj?:CmInfoChangePayload):CmInfoChangePayload {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CmInfoChangePayload()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id():string|null
id(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
id(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startCmInfoChangePayload(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static endCmInfoChangePayload(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createCmInfoChangePayload(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset):flatbuffers.Offset {
  CmInfoChangePayload.startCmInfoChangePayload(builder);
  CmInfoChangePayload.addId(builder, idOffset);
  return CmInfoChangePayload.endCmInfoChangePayload(builder);
}
}
