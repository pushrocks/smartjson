import * as plugins from './smartjson.plugins';

export class Smartjson {
  // ======
  // STATIC
  // ======
  /**
   * allows you to parse a json
   */
  public static parse = plugins.bufferJson.parse;

  public static stringify = (objArg: any, optionsArg: plugins.IStableJsonTypes['Options']) => {
    const bufferedJson = plugins.bufferJson.stringify(objArg);
    objArg = JSON.parse(bufferedJson);
    return plugins.stableJson(objArg, optionsArg);
  }

  // ========
  // INSTANCE
  // ========

  public saveableProperties: string[];

  /**
   * folds a class into an object
   */
  public foldToObject() {
    const newFoldedObject: { [key: string]: any } = {};
    for (const keyName of this.saveableProperties) {
      newFoldedObject[keyName] = plugins.lodashCloneDeep(this[keyName]);
    }
    return newFoldedObject;
  }

  /**
   * enfolds data from an object
   */
  public enfoldFromObject(objectArg) {
    for (const keyName in objectArg) {
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
