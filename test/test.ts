import { tap, expect } from "@pushrocks/tapbundle";

import { Foldable, foldDec } from "../dist/index";

class SomeClass extends Foldable {
  @foldDec() thisis: string = "test";
  constructor() {
    super();
    console.log(this.saveableProperties);
  }
}

let mySomeClass: SomeClass;

tap.test("should create a Foldable extended instance", async () => {
  mySomeClass = new SomeClass();
  expect(mySomeClass).to.be.instanceof(SomeClass);
  expect(mySomeClass).to.be.instanceof(Foldable);
});

tap.test("should create a folded object", async () => {
  let foldedObject = mySomeClass.foldToObject();
  expect(foldedObject)
    .property("thisis")
    .to.equal("test");
});

tap.test("should enfold from object", async () => {
  mySomeClass.enfoldFromObject({ thisis: "test2" });
  expect(mySomeClass)
    .property("thisis")
    .to.equal("test2");
});

tap.start()
