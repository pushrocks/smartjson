import * as plugins from './smartjson.plugins';

export class Smartjson {
  // ======
  // STATIC
  // ======
  static parse = JSON.parse;

  static stringify = async (objArg: any, optionsArg: plugins.stableJson.Options) => {
    return plugins.stableJson(objArg, optionsArg)
  };

  // ========
  // INSTANCE
  // ========

  saveableProperties: string[];

  /**
   * folds a class into an object
   */
  foldToObject() {
    let newFoldedObject: {[key: string]: any} = {};
    for (let keyName of this.saveableProperties) {
      newFoldedObject[keyName] = plugins.lodash.cloneDeep(this[keyName]);
    }
    return newFoldedObject;
  }

  /**
   * enfolds data from an object
   */
  enfoldFromObject(objectArg) {
    for (let keyName in objectArg) {
      if (this.saveableProperties.indexOf(keyName) !== -1) {
        this[keyName] = objectArg[keyName];
      }
    }
  }
}

/**
 * Decorator that marks a property as foldable
 */
export let foldDec = () => {
  return (target: any, key: string) => {
    if (!target.saveableProperties) {
      target.saveableProperties = [];
    }
    target.saveableProperties.push(key);
  };
};
