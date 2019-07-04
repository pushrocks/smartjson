# @pushrocks/smartjson
typed json handlers

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartjson)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartjson)
* [github.com (source mirror)](https://github.com/pushrocks/smartjson)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartjson/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartjson/badges/master/build.svg)](https://gitlab.com/pushrocks/smartjson/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartjson/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartjson/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smartjson.svg)](https://www.npmjs.com/package/@pushrocks/smartjson)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smartjson/badge.svg)](https://snyk.io/test/npm/@pushrocks/smartjson)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

Use TypeScript for best in class instellisense.

### Classes

SmartJson makes it easy to fold and enfold classes into and from JSON

```javascript
import { Smartjson, foldDec } from 'smartjson';

class AwesomeClass extends Smartjson {
  static stringify;

  computedValue: string;

  @foldDec() // mark anotherValueToStore as foldable
  anotherValueToStore: string = null;
  constructor() {
    super(); // this is important
  }
}

let myAwesomeInstance = new AwesomeClass();
let foldedObject = myAwesomeInstance.foldToObject(); // will return {anotherValueToStore: null}
myAwesomeInstance.enfoldFromObject({ anotherValueToStore: 'hi' });
foldedObject = myAwesomeInstance.foldToObject(); // will return {anotherValueToStore: 'hi'}
```

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://maintainedby.lossless.com)
