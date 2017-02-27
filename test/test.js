"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-test");
const smartchai_1 = require("smartchai");
const index_1 = require("../dist/index");
class SomeClass extends index_1.Foldable {
    constructor() {
        super();
        this.thisis = 'test';
        console.log(this.saveableProperties);
    }
}
__decorate([
    index_1.foldDec(),
    __metadata("design:type", String)
], SomeClass.prototype, "thisis", void 0);
let mySomeClass;
describe('smartjson', function () {
    it('should create a Foldable extended instance', function () {
        mySomeClass = new SomeClass();
        smartchai_1.expect(mySomeClass).to.be.instanceof(SomeClass);
        smartchai_1.expect(mySomeClass).to.be.instanceof(index_1.Foldable);
    });
    it('should create a folded object', function () {
        let foldedObject = mySomeClass.foldToObject();
        smartchai_1.expect(foldedObject).property('thisis').to.equal('test');
    });
    it('should enfold from object', function () {
        mySomeClass.enfoldFromObject({ thisis: 'test2' });
        smartchai_1.expect(mySomeClass).property('thisis').to.equal('test2');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3QkFBcUI7QUFDckIseUNBQWtDO0FBRWxDLHlDQUFpRDtBQUVqRCxlQUFnQixTQUFRLGdCQUFRO0lBRzlCO1FBQ0UsS0FBSyxFQUFFLENBQUE7UUFGVCxXQUFNLEdBQVcsTUFBTSxDQUFBO1FBR3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDdEMsQ0FBQztDQUNGO0FBTEM7SUFEQyxlQUFPLEVBQUU7O3lDQUNhO0FBT3pCLElBQUksV0FBc0IsQ0FBQTtBQUUxQixRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ3BCLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRTtRQUMvQyxXQUFXLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQTtRQUM3QixrQkFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQy9DLGtCQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQVEsQ0FBQyxDQUFBO0lBQ2hELENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLCtCQUErQixFQUFFO1FBQ2xDLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUM3QyxrQkFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzFELENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDJCQUEyQixFQUFFO1FBQzlCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFBO1FBQy9DLGtCQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDMUQsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9