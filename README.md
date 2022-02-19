# Google Authenticator

[![npm](https://img.shields.io/npm/v/yga)](http://www.npmtrends.com/yga)
[![NPM downloads](http://img.shields.io/npm/dm/yga.svg?style=flat-square)](http://www.npmtrends.com/yga)

Google Authenticator CLI Command.

- [Google Authenticator](#google-authenticator)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Add Platform](#add-platform)
    - [Remove Platform](#remove-platform)
    - [Generate](#generate)
  - [License](#license)

## Installation

```bash
$ npm i yga -g
```

## Usage

```bash
Usage: yga [options] [command]

Options:
  -v, --version   output the current version
  -h, --help      display help for command

Commands:
  add             Add platform ga key
  generate        Generate ga code.
  list            List all platform
  remove          Remove platform ga key
  help [command]  display help for command

Example call:
  $ yga --help
```

### Add Platform

```bash
$ yga add
? Please input platform name: test1
? Please input goole authentication key: **********
 SUCCESS  Add platform test1 success.
✨  Done in 33.32s.
```

### Remove Platform

```bash
$ yga remove
? Please select platform name to remove: test1
 SUCCESS  Remove platform 'test1' success.
```

### Generate

Help:

```bash
$ yga generate
? Please select platform name: npm
Generate ga code for npm:
 928576
Auto copy ga code to clipboard success.
```

Also you can omit `generate` word, like:

```bash
$ yga
```

## License

MIT License

Copyright (c) 2022 @yugasun.
