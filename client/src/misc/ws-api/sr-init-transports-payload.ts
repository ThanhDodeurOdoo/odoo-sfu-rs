// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class SrInitTransportsPayload {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SrInitTransportsPayload {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSrInitTransportsPayload(bb:flatbuffers.ByteBuffer, obj?:SrInitTransportsPayload):SrInitTransportsPayload {
  return (obj || new SrInitTransportsPayload()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSrInitTransportsPayload(bb:flatbuffers.ByteBuffer, obj?:SrInitTransportsPayload):SrInitTransportsPayload {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SrInitTransportsPayload()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id():string|null
id(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
id(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startSrInitTransportsPayload(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static endSrInitTransportsPayload(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSrInitTransportsPayload(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset):flatbuffers.Offset {
  SrInitTransportsPayload.startSrInitTransportsPayload(builder);
  SrInitTransportsPayload.addId(builder, idOffset);
  return SrInitTransportsPayload.endSrInitTransportsPayload(builder);
}
}