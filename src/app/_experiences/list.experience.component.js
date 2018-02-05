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
var experiences_service_1 = require("./_service/experiences.service");
// Routeur
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
// From http injectable get Map operator
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var AppListExperiences = (function () {
    function AppListExperiences(_member, route, location) {
        this._member = _member;
        this.route = route;
        this.location = location;
        this.mainTitle = "Experiences";
    }
    AppListExperiences.prototype.ngOnInit = function () {
        this._initMember(); // Init Members
        this._initDetails();
    };
    AppListExperiences.prototype._initMember = function () {
        var _this = this;
        // get Member with Id
        this.route.paramMap
            .switchMap(function (params) { return _this._member
            .getMemberProfil(+params.get('id')); })
            .subscribe(function (iMemberSummary) { return _this.iMemberSummary = iMemberSummary; });
    };
    AppListExperiences.prototype._initDetails = function () {
        var _this = this;
        // experiences details
        this.route.paramMap
            .switchMap(function (params) { return _this._member
            .getMemberExperiences(+params.get('id')); })
            .subscribe(function (iProfil) { return _this.iProfil = iProfil; });
    };
    return AppListExperiences;
}());
AppListExperiences = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'experiences',
        templateUrl: '_html/experiences.component.html',
        providers: [experiences_service_1.ExperienceService]
    }),
    __metadata("design:paramtypes", [experiences_service_1.ExperienceService,
        router_1.ActivatedRoute,
        common_1.Location])
], AppListExperiences);
exports.AppListExperiences = AppListExperiences;
//# sourceMappingURL=list.experience.component.js.map