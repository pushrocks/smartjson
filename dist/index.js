"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
let lodash = require('lodash');
class Foldable {
    /**
     * folds a class into an object
     */
    foldToObject() {
        let newFoldedObject = {};
        for (let keyName of this.saveableProperties) {
            newFoldedObject[keyName] = lodash.cloneDeep(this[keyName]);
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
exports.Foldable = Foldable;
/**
 * Decorator that marks a property as foldable
 */
exports.foldDec = () => {
    return (target, key) => {
        if (!target.saveableProperties) {
            target.saveableProperties = [];
        }
        target.saveableProperties.push(key);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7QUFFOUI7SUFHRTs7T0FFRztJQUNILFlBQVk7UUFDVixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUE7UUFDeEIsR0FBRyxDQUFDLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUM1QyxlQUFlLENBQUUsT0FBTyxDQUFFLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFFLENBQUMsQ0FBQTtRQUNoRSxDQUFDO1FBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQTtJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQkFBZ0IsQ0FBQyxTQUFTO1FBQ3hCLEdBQUcsQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBRSxPQUFPLENBQUUsR0FBRyxTQUFTLENBQUUsT0FBTyxDQUFFLENBQUE7WUFDeEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0NBQ0Y7QUF4QkQsNEJBd0JDO0FBRUQ7O0dBRUc7QUFDUSxRQUFBLE9BQU8sR0FBRztJQUNuQixNQUFNLENBQUMsQ0FBQyxNQUFXLEVBQUUsR0FBVztRQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFBO1FBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3JDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQSJ9