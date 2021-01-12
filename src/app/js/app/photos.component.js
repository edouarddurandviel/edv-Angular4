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
// Component decorators
var core_1 = require("@angular/core");
var photos_service_1 = require("./_services/photos.service");
// From http injectable get Map operator
require("rxjs/add/operator/map");
var AppPhotos = (function () {
    function AppPhotos(_product) {
        this._product = _product;
        this.appStatus = true;
    }
    AppPhotos.prototype.ngOnInit = function () {
        var _this = this;
        this._product.getProducts()
            .subscribe(function (iphotos) { return _this.iphotos = iphotos; });
    };
    return AppPhotos;
}());
AppPhotos = __decorate([
    core_1.Component({
        selector: '<photos></photos>',
        templateUrl: './photos/app.photos.component.html',
        providers: [photos_service_1.PhotosService]
    }),
    __metadata("design:paramtypes", [photos_service_1.PhotosService])
], AppPhotos);
exports.AppPhotos = AppPhotos;
//# sourceMappingURL=photos.component.js.map