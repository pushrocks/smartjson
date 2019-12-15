import lodashCloneDeep from 'lodash.clonedeep';
import stableJson2 from 'fast-json-stable-stringify';

const stableJson = stableJson2 as any;

export { lodashCloneDeep, stableJson };

export interface IStableJsonTypes {
  Comparator: (a: IStableJsonTypes['CompareDescriptor'], b: IStableJsonTypes['CompareDescriptor']) => number;
  CompareDescriptor: {
      key: string;
      value: any;
  };
  Options: {
    cmp?: (a: IStableJsonTypes['CompareDescriptor'], b: IStableJsonTypes['CompareDescriptor']) => number;
    cycles?: boolean;
  };
}
