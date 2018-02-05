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
// From http injectable get Map operator
require("rxjs/add/operator/map");
var AppExperiences = (function () {
    // Constructor
    function AppExperiences(_experiences) {
        this._experiences = _experiences;
        this.mainTitle = "Experiences";
        this.memberId = 1;
    }
    AppExperiences.prototype.ngOnInit = function () {
        this._initMember(); // Init Members
    };
    AppExperiences.prototype._initMember = function () {
        var _this = this;
        this._experiences.getMemberExperiences(this.memberId).subscribe(function (iexperiences) { return _this.iexperiences = iexperiences; }); // Experiences list form ne memebr
    };
    return AppExperiences;
}());
AppExperiences = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'products',
        templateUrl: '_html/app.experiences.description.component.html',
        providers: [experiences_service_1.ExperienceService]
    }),
    __metadata("design:paramtypes", [experiences_service_1.ExperienceService])
], AppExperiences);
exports.AppExperiences = AppExperiences;
//# sourceMappingURL=experience.component.js.map