import { tap, expect } from '@pushrocks/tapbundle';

import { Smartjson, foldDec } from '../ts/index';

class SomeClass extends Smartjson {
  @foldDec() thisis: string = 'test';
  constructor() {
    super();
    console.log(this.saveableProperties);
  }
}

let mySomeClass: SomeClass;

tap.test('should create a Foldable extended instance', async () => {
  mySomeClass = new SomeClass();
  expect(mySomeClass).to.be.instanceof(SomeClass);
  expect(mySomeClass).to.be.instanceof(Smartjson);
});

tap.test('should create a folded object', async () => {
  let foldedObject = mySomeClass.foldToObject();
  expect(foldedObject)
    .property('thisis')
    .to.equal('test');
});

tap.test('should enfold from object', async () => {
  const mySomeClass2 = SomeClass.enfoldFromObject({ thisis: 'test2' });
  expect(mySomeClass2)
    .property('thisis')
    .to.equal('test2');
});

tap.start();
