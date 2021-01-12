"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Component decorators
var core_1 = require("@angular/core");
// Home-made Interfaces - Services
// import { IntProduct } from './products';
// import { ProductService } from './products.service';
// import { IntPhotos} from './photos';
// import { PhotosService } from './photos.service';
// Injectable classes ( constructor - members)
// import { Http, Response } from '@angular/http';
// From http injectable get Observable
// import { Observable } from 'rxjs/Observable';
// From http injectable get Map operator
require("rxjs/add/operator/map");
// Decorator for MetaData invoquing Components Edouard
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Edouard Durand-Viel';
        this.lastname = 'durand';
        this.appStatus = true;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'demo-app',
        templateUrl: './app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map