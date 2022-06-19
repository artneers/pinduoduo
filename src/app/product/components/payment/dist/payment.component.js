"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymentComponent = void 0;
var core_1 = require("@angular/core");
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
        this.payments = [];
        this.paymentSelected = new core_1.EventEmitter();
        this.selectedId = 1;
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent.prototype.handleSelection = function (payment) {
        this.selectedId = payment.id;
        this.paymentSelected.emit(payment);
    };
    __decorate([
        core_1.Input()
    ], PaymentComponent.prototype, "payments");
    __decorate([
        core_1.Output()
    ], PaymentComponent.prototype, "paymentSelected");
    PaymentComponent = __decorate([
        core_1.Component({
            selector: 'app-payment',
            templateUrl: './payment.component.html',
            styleUrls: ['./payment.component.css']
        })
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;
