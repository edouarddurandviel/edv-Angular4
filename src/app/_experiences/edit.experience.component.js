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
// Home-made Interfaces - Services
var experience_1 = require("./experience");
var experiences_service_1 = require("./_service/experiences.service");
// From http injectable get Map operator
require("rxjs/add/operator/map");
// Routeur
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
// From http injectable get Map operator
require("rxjs/add/operator/switchMap");
var AppEditExperience = /** @class */ (function () {
    // Constructor
    function AppEditExperience(_members, // Create Memeber
    route, location) {
        this._members = _members;
        this.route = route;
        this.location = location;
        this.experiences = []; // Input Object
    }
    // Life cycle
    AppEditExperience.prototype.ngOnInit = function () {
        this.model = new experience_1.Experience();
    };
    AppEditExperience.prototype.ngAfterViewInit = function () {
    };
    AppEditExperience.prototype._onPatch = function (experience) {
        var _this = this;
        // Submit form
        this.route.paramMap
            .switchMap(function (params) { return _this._members.createMemberObserv(+params.get('id'), experience); })
            .subscribe(function (experience) {
            _this.experiences.push(experience);
        });
        // add link to list
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", experience_1.Experience)
    ], AppEditExperience.prototype, "model", void 0);
    AppEditExperience = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: '_html/edit.experience.component.html',
            providers: [experiences_service_1.ExperienceService]
        }),
        __metadata("design:paramtypes", [experiences_service_1.ExperienceService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], AppEditExperience);
    return AppEditExperience;
}());
exports.AppEditExperience = AppEditExperience;
//# sourceMappingURL=edit.experience.component.js.map