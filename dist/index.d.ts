import 'typings-global';
export declare class Foldable {
    saveableProperties: string[];
    /**
     * folds a class into an object
     */
    foldToObject(): {};
    /**
     * enfolds data from an object
     */
    enfoldFromObject(objectArg: any): void;
}
/**
 * Decorator that marks a property as foldable
 */
export declare let foldDec: () => (target: any, key: string) => void;
