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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var observable_1 = require("rxjs/observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
var MembersService = /** @class */ (function () {
    // constructeur
    function MembersService(_http) {
        this._http = _http;
        this._membersUrl = 'http://localhost:3000/api/Members';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    // CRUD and then get all members with Observable
    MembersService.prototype.getMembers = function () {
        return this._http.get(this._membersUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // get One ember by Id
    MembersService.prototype.getMember = function (id) {
        return this._http.get(this._membersUrl + '/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // erreurs
    MembersService.prototype.handleError = function (error) {
        console.error(error);
        return observable_1.Observable.throw(error.json().error());
    };
    var _a;
    MembersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], MembersService);
    return MembersService;
}());
exports.MembersService = MembersService;
//# sourceMappingURL=service.js.map