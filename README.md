# Base64 URL

[![NPM version](https://img.shields.io/npm/v/@blakeembrey/base64url.svg?style=flat)](https://npmjs.org/package/@blakeembrey/base64url)
[![NPM downloads](https://img.shields.io/npm/dm/@blakeembrey/base64url.svg?style=flat)](https://npmjs.org/package/@blakeembrey/base64url)
[![Build status](https://img.shields.io/travis/blakeembrey/base64url.svg?style=flat)](https://travis-ci.org/blakeembrey/base64url)
[![Test coverage](https://img.shields.io/coveralls/blakeembrey/base64url.svg?style=flat)](https://coveralls.io/r/blakeembrey/base64url?branch=master)

> [`Base64 URL`](http://en.wikipedia.org/wiki/Base64#RFC_4648) for node.js buffers.

## Installation

```
npm install @blakeembrey/base64url --save
```

## Usage

```js
import { decode, encode } from "@blakeembrey/base64url";

encode(Buffer.from("test", "utf8")); //=> "dGVzdA"
decode("dGVzdA"); //=> Buffer.from("test", "utf8")
```

## TypeScript

This module uses [TypeScript](https://github.com/Microsoft/TypeScript) and contains type definitions on NPM.

## License

Apache 2.0
