# Two Factor Authentication

[![npm](https://img.shields.io/npm/v/%40ygkit%2F2fa)](http://www.npmtrends.com/%40ygkit%2F2fa)
[![NPM downloads](http://img.shields.io/npm/dm/%40ygkit%2F2fa.svg?style=flat-square)](http://www.npmtrends.com/%40ygkit%2F2fa)

CLI Command for Two Factor Authentication.

- [Two Factor Authentication](#two-factor-authentication)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Add Platform](#add-platform)
    - [Remove Platform](#remove-platform)
    - [Generate](#generate)
  - [License](#license)

## Installation

```bash
$ npm i @ygkit/2fa -g
```

## Usage

```bash
Usage: 2fa [options] [command]

Options:
  -v, --version   output the current version
  -h, --help      display help for command

Commands:
  add             Add platform 2fa key
  generate        Generate 2fa code.
  list            List all platform
  remove          Remove platform ga key
  help [command]  display help for command

Example call:
  $ 2fa --help
```

### Add Platform

```bash
$ 2fa add
? Please input platform name: test1
? Please input 2fa authentication key: **********
 SUCCESS  Add platform test1 success.
✨  Done in 33.32s.
```

### Remove Platform

```bash
$ 2fa remove
? Please select platform name to remove: test1
 SUCCESS  Remove platform 'test1' success.
```

### Generate

Help:

```bash
$ 2fa generate
? Please select platform name: npm
Generate 2fa code for npm:
 928576
Auto copy 2fa code to clipboard success.
```

Also you can omit `generate` word, like:

```bash
$ 2fa
```

## License

MIT License

Copyright (c) 2022 @yugasun.
