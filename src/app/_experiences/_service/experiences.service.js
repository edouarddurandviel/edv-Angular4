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
require("rxjs/add/operator/finally");
require("rxjs/add/operator/toPromise");
require("rxjs/add/observable/of");
require("rxjs/add/observable/throw");
var ExperienceService = /** @class */ (function () {
    // constructeur
    function ExperienceService(_http) {
        this._http = _http;
        this._experiencesUrl = 'http://localhost:3000/api';
        this._addexpeUrl = 'http://localhost:3000/api/Members/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    // CRUD and then get all members with Observable
    // create a member with Promises
    ExperienceService.prototype.createMemberExperience = function (memberId, experience) {
        return this._http
            .post(this._addexpeUrl + memberId + '/experience', JSON.stringify(experience), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.promiseHandleError);
    };
    ExperienceService.prototype.promiseHandleError = function (error) {
        console.error('EDOUARD An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ExperienceService.prototype.extractData = function (res) {
        if (res.ok == true) {
            var body = res.json();
            return body || { 'status': 'yes' };
        }
    };
    // TODO createMember en Observable
    ExperienceService.prototype.createMemberObserv = function (memberId, experience) {
        return this._http.post(this._addexpeUrl + memberId + '/experience', JSON.stringify(experience), this.options)
            .map(this.extractData)
            .catch(this.obsHandleError);
    };
    ExperienceService.prototype.obsHandleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return observable_1.Observable.throw(errMsg);
    };
    // get One ember by Id
    ExperienceService.prototype.getMemberProfil = function (id) {
        return this._http.get(this._experiencesUrl + '/Members/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get all Experiences by member Id
    ExperienceService.prototype.getMemberExperiences = function (memberId) {
        return this._http.get(this._experiencesUrl + '/Members/' + memberId + '/experience?filter[order]=id%20DESC')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ExperienceService.prototype.getThisMemberExperience = function (memberId, id) {
        return this._http.get(this._experiencesUrl + '/Members/' + memberId + '/experience/' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // erreurs
    ExperienceService.prototype.handleError = function (error) {
        console.error(error);
        return observable_1.Observable.throw(error.json().error());
    };
    var _a;
    ExperienceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], ExperienceService);
    return ExperienceService;
}());
exports.ExperienceService = ExperienceService;
//# sourceMappingURL=experiences.service.js.map