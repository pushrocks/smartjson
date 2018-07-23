# smartjson

typed json handlers

## Availabililty

[![npm](https://pushrocks.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartjson)
[![git](https://pushrocks.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/smartjson)
[![git](https://pushrocks.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartjson)
[![docs](https://pushrocks.gitlab.io/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartjson/)

## Status for master

[![build status](https://GitLab.com/pushrocks/smartjson/badges/master/build.svg)](https://GitLab.com/pushrocks/smartjson/commits/master)
[![coverage report](https://GitLab.com/pushrocks/smartjson/badges/master/coverage.svg)](https://GitLab.com/pushrocks/smartjson/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/smartjson.svg)](https://www.npmjs.com/package/smartjson)
[![Dependency Status](https://david-dm.org/pushrocks/smartjson.svg)](https://david-dm.org/pushrocks/smartjson)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartjson/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartjson/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartjson/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartjson)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

Use TypeScript for best in class instellisense.

### Classes

SmartJson makes it easy to fold and enfold classes into and from JSON

```javascript
import { Foldable, foldDec } from 'smartjson';

class AwesomeClass extends Foldable {
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

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
> | By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)
