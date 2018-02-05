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
// Home-made Interfaces - Services
var experience_1 = require("./experience");
var experiences_service_1 = require("./_service/experiences.service");
var list_experience_component_1 = require("./list.experience.component");
// From http injectable get Map operator
require("rxjs/add/operator/map");
// Routeur
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
// From http injectable get Map operator
require("rxjs/add/operator/switchMap");
var AppAddExperience = (function () {
    // Constructor
    function AppAddExperience(_members, // Create Memeber
        componentFactoryResolver, // SwithView
        route, location) {
        this._members = _members;
        this.componentFactoryResolver = componentFactoryResolver;
        this.route = route;
        this.location = location;
        this.experiences = []; // Input Object
    }
    // Life cycle
    AppAddExperience.prototype.ngOnInit = function () {
        this.model = new experience_1.Experience();
    };
    AppAddExperience.prototype.ngAfterViewInit = function () {
        this._load_ListComponent();
    };
    AppAddExperience.prototype._onSubmit = function (experience) {
        var _this = this;
        // Submit form
        this.route.paramMap
            .switchMap(function (params) { return _this._members.createMemberObserv(+params.get('id'), experience); })
            .subscribe(function (experience) {
            _this.experiences.push(experience);
        });
        this.pro.clear();
        setTimeout(function () {
            _this.ngAfterViewInit();
        }, 500);
    };
    AppAddExperience.prototype._load_ListComponent = function () {
        var newAppExperiences = this.componentFactoryResolver.resolveComponentFactory(list_experience_component_1.AppListExperiences);
        this.pro.createComponent(newAppExperiences);
    };
    return AppAddExperience;
}());
__decorate([
    core_1.ViewChild('pro', { read: core_1.ViewContainerRef }) // Target seletor
    ,
    __metadata("design:type", core_1.ViewContainerRef)
], AppAddExperience.prototype, "pro", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", experience_1.Experience)
], AppAddExperience.prototype, "model", void 0);
AppAddExperience = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: '_html/add.experience.component.html',
        providers: [experiences_service_1.ExperienceService]
    }),
    __metadata("design:paramtypes", [experiences_service_1.ExperienceService,
        core_1.ComponentFactoryResolver,
        router_1.ActivatedRoute,
        common_1.Location])
], AppAddExperience);
exports.AppAddExperience = AppAddExperience;
//# sourceMappingURL=add.experience.component.js.map