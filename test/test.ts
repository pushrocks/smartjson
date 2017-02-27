import 'typings-test'
import { expect } from 'smartchai'

import { Foldable, foldDec } from '../dist/index'

class SomeClass extends Foldable {
  @foldDec()
  thisis: string = 'test'
  constructor () {
    super()
    console.log(this.saveableProperties)
  }
}

let mySomeClass: SomeClass

describe('smartjson', function () {
  it('should create a Foldable extended instance', function () {
    mySomeClass = new SomeClass()
    expect(mySomeClass).to.be.instanceof(SomeClass)
    expect(mySomeClass).to.be.instanceof(Foldable)
  })

  it('should create a folded object', function () {
    let foldedObject = mySomeClass.foldToObject()
    expect(foldedObject).property('thisis').to.equal('test')
  })

  it('should enfold from object', function () {
    mySomeClass.enfoldFromObject({thisis: 'test2'})
    expect(mySomeClass).property('thisis').to.equal('test2')
  })
})
