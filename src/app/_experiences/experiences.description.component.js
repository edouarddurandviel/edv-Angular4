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
var experiences_service_1 = require("./_service/experiences.service");
// Routeur
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
// From http injectable get Map operator
require("rxjs/add/operator/switchMap");
var AppExperienceDescription = /** @class */ (function () {
    function AppExperienceDescription(_member, route, location) {
        this._member = _member;
        this.route = route;
        this.location = location;
    }
    AppExperienceDescription.prototype.ngOnInit = function () {
        this._initMember();
        this._initDetails();
        /*  this._initSkills();*/
    };
    AppExperienceDescription.prototype._initMember = function () {
        var _this = this;
        // get Member with Id
        this.route.paramMap
            .switchMap(function (params) { return _this._member
            .getMemberProfil(+params.get('id')); })
            .subscribe(function (iMemberSummary) { return _this.iMemberSummary = iMemberSummary; });
    };
    AppExperienceDescription.prototype._initDetails = function () {
        var _this = this;
        // experiences details
        this.route.paramMap
            .switchMap(function (params) { return _this._member
            .getMemberExperiences(+params.get('id')); })
            .subscribe(function (iProfil) { return _this.iProfil = iProfil; });
    };
    AppExperienceDescription = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ng-products-desc',
            templateUrl: '_html/app.description.component.html',
            providers: [experiences_service_1.ExperienceService]
        }),
        __metadata("design:paramtypes", [experiences_service_1.ExperienceService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], AppExperienceDescription);
    return AppExperienceDescription;
}());
exports.AppExperienceDescription = AppExperienceDescription;
//# sourceMappingURL=experiences.description.component.js.map