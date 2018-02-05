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
var experience_component_1 = require("./experience.component");
// From http injectable get Map operator
require("rxjs/add/operator/map");
var ParentAppExperience = (function () {
    // Constructor
    function ParentAppExperience(_members, // Create Memeber
        componentFactoryResolver // SwithView
    ) {
        this._members = _members;
        this.componentFactoryResolver = componentFactoryResolver; // SwithView
        this.experiences = []; // Input Object
    }
    // Life cycle
    ParentAppExperience.prototype.ngOnInit = function () {
        this.model = new experience_1.Experience();
    };
    ParentAppExperience.prototype.ngAfterViewInit = function () {
        this._load_ListComponent();
    };
    ParentAppExperience.prototype._onSubmit = function (experience) {
        var _this = this;
        // Submit form
        this._members.createMemberExperience(experience)
            .then(function (experience) {
            _this.experiences.push(experience);
        });
        this.parents.clear();
        this.ngAfterViewInit();
    };
    ParentAppExperience.prototype._load_ListComponent = function () {
        var _this = this;
        var newAppExperiences = this.componentFactoryResolver.resolveComponentFactory(experience_component_1.AppExperiences);
        setTimeout(function () {
            _this.parents.createComponent(newAppExperiences);
        }, 500);
    };
    return ParentAppExperience;
}());
__decorate([
    core_1.ViewChild('experienceparents', { read: core_1.ViewContainerRef }) // Target seletor
    ,
    __metadata("design:type", core_1.ViewContainerRef)
], ParentAppExperience.prototype, "parents", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", experience_1.Experience)
], ParentAppExperience.prototype, "model", void 0);
ParentAppExperience = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: '_html/app.parent.component.html',
        providers: [experiences_service_1.ExperienceService]
    }),
    __metadata("design:paramtypes", [experiences_service_1.ExperienceService,
        core_1.ComponentFactoryResolver // SwithView
    ])
], ParentAppExperience);
exports.ParentAppExperience = ParentAppExperience;
//# sourceMappingURL=parent.experience.component.js.map