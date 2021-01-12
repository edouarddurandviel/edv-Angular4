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
// Component decorators
var core_1 = require("@angular/core");
var photos_list_service_1 = require("./_service/photos-list.service");
// import { TruncatePipe } from './truncate';
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var AppPhotosDesc = /** @class */ (function () {
    function AppPhotosDesc(_photos, route, location) {
        this._photos = _photos;
        this.route = route;
        this.location = location;
        this.appStatus = true;
    }
    AppPhotosDesc.prototype.ngOnInit = function () {
        this._initPhotoDescription();
    };
    AppPhotosDesc.prototype._initPhotoDescription = function () {
        var _this = this;
        // get photo description
        this.route.paramMap
            .switchMap(function (params) { return _this._photos
            .getPhotosDesc(+params.get('id')); })
            .subscribe(function (pdesc) { return _this.pdesc = pdesc; });
    };
    AppPhotosDesc = __decorate([
        core_1.Component({
            selector: '<photos-des></photos-des>',
            templateUrl: './_html/app.photos-list.component.html',
            providers: [photos_list_service_1.PhotosServiceDesc]
        }),
        __metadata("design:paramtypes", [photos_list_service_1.PhotosServiceDesc,
            router_1.ActivatedRoute,
            common_1.Location])
    ], AppPhotosDesc);
    return AppPhotosDesc;
}());
exports.AppPhotosDesc = AppPhotosDesc;
//# sourceMappingURL=photos-list.component.js.map