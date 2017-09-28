"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var content_services_1 = require("./content.services");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(_text) {
        this._text = _text;
        this.title = 'Edouard. New Angular 4 App';
        this.secondTitle = 'second title for ng4';
        this.date = new Date();
        this.findDay = function () {
            if (this.date.getDate() < 10) {
                var day = '0' + this.date.getDate();
            }
            else {
                var day = this.date.getDate();
            }
            return day;
        };
        this.findMonth = function () {
            if ((this.date.getMonth() + 1) < 10) {
                var month = '0' + (this.date.getMonth() + 1);
            }
            else {
                var month = this.date.getMonth() + 1;
            }
            return month;
        };
        this.currentDay = this.findDay();
        this.currentMonth = this.findMonth();
        this.subtitle = 'The current Date: ' + this.currentDay + '/' + this.currentMonth + '/' + this.date.getFullYear();
    }
    AppComponent.prototype.getTexts = function () {
        var _this = this;
        this._text.getTexts().then(function (itext) { return _this.itext = itext; });
    };
    AppComponent.prototype.ngOnInit = function () {
        console.log(this.getTexts() + ' 1');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [content_services_1.ContentService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
