"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BackButtonComponent = void 0;
var core_1 = require("@angular/core");
var BackButtonComponent = /** @class */ (function () {
    function BackButtonComponent(location) {
        this.location = location;
        this.float = true;
    }
    BackButtonComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(BackButtonComponent.prototype, "imageUrl", {
        get: function () {
            return this.float ? "assets/icons/back_light.png" : "assets/icons/back_dark.png";
        },
        enumerable: false,
        configurable: true
    });
    BackButtonComponent.prototype.handleBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input()
    ], BackButtonComponent.prototype, "float");
    BackButtonComponent = __decorate([
        core_1.Component({
            selector: 'app-back-button',
            templateUrl: './back-button.component.html',
            styleUrls: ['./back-button.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], BackButtonComponent);
    return BackButtonComponent;
}());
exports.BackButtonComponent = BackButtonComponent;
