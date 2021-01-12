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
var photos_list_service_1 = require("./photos-list.service");
// Injectable classes ( constructor - members)
// import { Http, Response } from '@angular/http';
// From http injectable get Observable
// import { Observable } from 'rxjs/Observable';
// From http injectable get Map operator
// import 'rxjs/add/operator/map';
// import { TruncatePipe } from './truncate';
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var AppPhotosDesc = (function () {
    function AppPhotosDesc(_photos, route, location) {
        this._photos = _photos;
        this.route = route;
        this.location = location;
        this.appStatus = true;
    }
    AppPhotosDesc.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this._photos.getPhotosDesc(+params.get('id')); })
            .subscribe(function (pdesc) { return _this.pdesc = pdesc; });
    };
    return AppPhotosDesc;
}());
AppPhotosDesc = __decorate([
    core_1.Component({
        selector: '<photos-des></photos-des>',
        templateUrl: './app.photos-list.component.html',
        providers: [photos_list_service_1.PhotosServiceDesc]
    }),
    __metadata("design:paramtypes", [photos_list_service_1.PhotosServiceDesc,
        router_1.ActivatedRoute,
        common_1.Location])
], AppPhotosDesc);
exports.AppPhotosDesc = AppPhotosDesc;
//# sourceMappingURL=photos-list.component.js.map