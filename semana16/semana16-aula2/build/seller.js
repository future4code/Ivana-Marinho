"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
const employee_1 = require("./employee");
class Seller extends employee_1.Employee {
    constructor() {
        super(...arguments);
        this.salesQuantity = 0;
    }
    getSalesQuantity() {
        return this.salesQuantity;
    }
    setSalesQuantity(quantity) {
        this.salesQuantity = quantity;
    }
    calculateTotalSalary() {
        super.calculateTotalSalary();
        return this.baseSalary + 400 + this.salesQuantity * 5;
    }
}
exports.Seller = Seller;
//# sourceMappingURL=seller.js.map