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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/finally");
require("rxjs/add/operator/toPromise");
require("rxjs/add/observable/of");
require("rxjs/add/observable/throw");
var MembersService = (function () {
    // constructeur
    function MembersService(_http) {
        this._http = _http;
        this._membersUrl = 'http://localhost:3000/api/Members';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    // CRUD and then get all members with Observable
    MembersService.prototype.getMembers = function () {
        return this._http.get(this._membersUrl + '?filter[order]=id%20DESC')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // create a member with Promises
    MembersService.prototype.createMember = function (member) {
        return this._http
            .post(this._membersUrl, JSON.stringify(member), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.promiseHandleError);
    };
    MembersService.prototype.promiseHandleError = function (error) {
        console.error('EDOUARD An error occurred', error);
        return Promise.reject(error.message || error);
    };
    MembersService.prototype.extractData = function (res) {
        if (res.ok == true) {
            var body = res.json();
            return body || { 'status': 'yes' };
        }
    };
    // TODO createMember en Observable
    MembersService.prototype.createMemberObserv = function (member) {
        return this._http.post(this._membersUrl, JSON.stringify(member), this.options)
            .map(this.extractData)
            .catch(this.obsHandleError);
    };
    MembersService.prototype.obsHandleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    // get One ember by Id
    MembersService.prototype.getMember = function (id) {
        return this._http.get(this._membersUrl + '/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get all Skills by member Id
    MembersService.prototype.getMemberSkills = function (id) {
        return this._http.get(this._membersUrl + '/' + id + '/skill')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // erreurs
    MembersService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error());
    };
    return MembersService;
}());
MembersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MembersService);
exports.MembersService = MembersService;
//# sourceMappingURL=members.service.js.map