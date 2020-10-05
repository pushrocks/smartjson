# @pushrocks/smartjson
typed json handlers

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartjson)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartjson)
* [github.com (source mirror)](https://github.com/pushrocks/smartjson)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartjson/)

## Status for master

Status Category | Status Badge
-- | --
GitLab Pipelines | [![pipeline status](https://gitlab.com/pushrocks/smartjson/badges/master/pipeline.svg)](https://lossless.cloud)
GitLab Pipline Test Coverage | [![coverage report](https://gitlab.com/pushrocks/smartjson/badges/master/coverage.svg)](https://lossless.cloud)
npm | [![npm downloads per month](https://badgen.net/npm/dy/@pushrocks/smartjson)](https://lossless.cloud)
Snyk | [![Known Vulnerabilities](https://badgen.net/snyk/pushrocks/smartjson)](https://lossless.cloud)
TypeScript Support | [![TypeScript](https://badgen.net/badge/TypeScript/>=%203.x/blue?icon=typescript)](https://lossless.cloud)
node Support | [![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
Code Style | [![Code Style](https://badgen.net/badge/style/prettier/purple)](https://lossless.cloud)
PackagePhobia (total standalone install weight) | [![PackagePhobia](https://badgen.net/packagephobia/install/@pushrocks/smartjson)](https://lossless.cloud)
PackagePhobia (package size on registry) | [![PackagePhobia](https://badgen.net/packagephobia/publish/@pushrocks/smartjson)](https://lossless.cloud)
BundlePhobia (total size when bundled) | [![BundlePhobia](https://badgen.net/bundlephobia/minzip/@pushrocks/smartjson)](https://lossless.cloud)
Platform support | [![Supports Windows 10](https://badgen.net/badge/supports%20Windows%2010/yes/green?icon=windows)](https://lossless.cloud) [![Supports Mac OS X](https://badgen.net/badge/supports%20Mac%20OS%20X/yes/green?icon=apple)](https://lossless.cloud)

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
// You can also fold to Json, with support for buffers
// const jsonString = myAwesomeInstance.foldToJson();
myAwesomeInstance = AwesomeClass.enfoldFromObject({ anotherValueToStore: 'hi' });
foldedObject = myAwesomeInstance.foldToObject(); // will return {anotherValueToStore: 'hi'}
```

## Contribution

We are always happy for code contributions. If you are not the code contributing type that is ok. Still, maintaining Open Source repositories takes considerable time and thought. If you like the quality of what we do and our modules are useful to you we would appreciate a little monthly contribution: You can [contribute one time](https://lossless.link/contribute-onetime) or [contribute monthly](https://lossless.link/contribute). :)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)