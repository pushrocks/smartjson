import 'typings-global'
let lodash = require('lodash')

export class Foldable {
  saveableProperties: string[]

  /**
   * folds a class into an object
   */
  foldToObject () {
    let newFoldedObject = {}
    for (let keyName of this.saveableProperties) {
      newFoldedObject[ keyName ] = lodash.cloneDeep(this[ keyName ])
    }
    return newFoldedObject
  }

  /**
   * enfolds data from an object
   */
  enfoldFromObject(objectArg) {
    for (let keyName in objectArg) {
      if (this.saveableProperties.indexOf(keyName) !== -1) {
        this[ keyName ] = objectArg[ keyName ]
      }
    }
  }
}

/**
 * Decorator that marks a property as foldable
 */
export let foldDec = () => {
  return (target: any, key: string) => {
    if (!target.saveableProperties) { target.saveableProperties = [] }
    target.saveableProperties.push(key)
  }
}
