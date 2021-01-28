import * as plugins from './smartjson.plugins';

/**
 * allows you to parse a json
 */
export const parse = plugins.bufferJson.parse;

/**
 *
 * @param objArg
 * @param optionsArg
 */
export const stringify = (objArg: any, optionsArg: plugins.IStableJsonTypes['Options'] = {}): string => {
  const bufferedJson = plugins.bufferJson.stringify(objArg);
  objArg = JSON.parse(bufferedJson);
  return plugins.stableJson(objArg, optionsArg);
};

export class Smartjson {
  /**
   * enfolds data from an object
   */
  public static enfoldFromObject(objectArg) {
    const newInstance = new this();
    for (const keyName in objectArg) {
      if (newInstance.saveableProperties.indexOf(keyName) !== -1) {
        newInstance[keyName] = objectArg[keyName];
      }
    }
    return newInstance;
  }

  /**
   * enfold from json
   */
  public static enfoldFromJson(jsonArg: string) {
    const objectFromJson = parse(jsonArg);
    return this.enfoldFromObject(objectFromJson);
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
    const trackMap = [];
    for (const keyName of this.saveableProperties) {
      let value = this[keyName];
      if (value instanceof Smartjson) {
        if (trackMap.includes(value)) {
          throw new Error('cycle detected');
        }
        trackMap.push(value);
        value = value.foldToObject();
      }
      newFoldedObject[keyName] = plugins.lodashCloneDeep(value);
    }
    return newFoldedObject;
  }

  /**
   * folds a class into an object
   */
  public foldToJson() {
    const foldedObject = this.foldToObject();
    return stringify(foldedObject, {});
  }
}

/**
 * Decorator that marks a property as foldable
 */
export const foldDec = () => {
  return (target: any, key: string) => {
    if (!target.saveableProperties) {
      target.saveableProperties = [];
    }
    target.saveableProperties.push(key);
  };
};

export const deepEqualObjects = (object1: any, object2: any): boolean => {
  const object1String = stringify(object1);
  const object2String = stringify(object2);
  return object1String === object2String;
}
