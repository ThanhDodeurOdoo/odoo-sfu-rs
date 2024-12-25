Rust version of [Odoo's sfu](https://github.com/odoo/sfu).

## Requirements

- [Rust](https://www.rust-lang.org/) v1.80 or later


## Dev Requirements

- [flatc](https://github.com/google/flatbuffers/releases) (for compiling flatbuffer schema, this should be done before building the client)
- [Node.js 20.9.0 (LTS)](https://nodejs.org/) (for building client)

## Installation

# compiling flatbuffer schema

```bash
flatc --rust -o src/misc flatbuffers/schema.fbs
flatc --ts -o client/src/misc flatbuffers/schema.fbs
```

# compiling the client

```bash
cargo build --release
```
