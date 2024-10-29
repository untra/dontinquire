# dontinquire

an override replacement for `@protobufjs/inquire`

This is a project inspired by [dry-uninstall](https://github.com/denys-potapov/dry-uninstall#readme) to help prevent an unnecessary use of [eval](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) from a popular protobuf-javascript utility library [@protobufjs/inquire]

## Why?

[protobuf.js] is a handy library for the generation of javascript and typescript serialization classes from protobuf files. _Yay!_
It promises a minimal implementation that doesn't use `eval` for reflection capabilities. _Yay!_
But it bundles an additional library `inquire` to optionally check for available and advanced javascript capabilities like `long` support. _Boo!_
And it does this with a library that uses `eval` and a scheme to evade bundlers. _Boo!_

There have been [many](https://github.com/protobufjs/protobuf.js/issues/1754) [filed](https://github.com/protobufjs/protobuf.js/issues/997) [issues](https://github.com/protobufjs/protobuf.js/issues/1713) about this, none answered.

So heres the workaround: dont inquire.

## Usage

add this overrides section to your package.json:

```
{
  "overrides": {
    "@protobufjs/inquire": "npm:@untra/dontinquire@0.1.0"
  }
}
```

This replaces the vulnerable optional library with one that returns `null` instead. Make sure the section is correctly overridden and updated in the `package-lock.json`:
```
    "node_modules/@protobufjs/inquire": {
      "name": "@untra/dontinquire",
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/@untra/dontinquire/-/dontinquire-0.1.0.tgz",
      "integrity": "sha512-vNXxof1p2H69TB8XrZc6uxSEi8O6gyKN+Xel7Alfs/GsWGeaUsSXMwAETZzEMDYGSIfb2EZC+5wYcr6AA8H8qw=="
    },
```

### How it works

[npm overrides](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides) tells npm to use a different library.