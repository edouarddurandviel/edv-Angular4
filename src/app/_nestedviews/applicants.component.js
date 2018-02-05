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
// Services
var service_1 = require("./Service/service");
var list_members_component_1 = require("./../_members/list.members.component");
var AppApplicant = (function () {
    function AppApplicant(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.mainTitle = "This component helps you to filter the output";
    }
    AppApplicant.prototype.ngAfterViewInit = function () {
        this.loadListComponent();
    };
    AppApplicant.prototype.loadListComponent = function () {
        var newAppMembers = this.componentFactoryResolver.resolveComponentFactory(list_members_component_1.AppListMembers);
        this.parent.createComponent(newAppMembers);
    };
    return AppApplicant;
}());
__decorate([
    core_1.ViewChild('parent', { read: core_1.ViewContainerRef }) //Target seletor
    ,
    __metadata("design:type", core_1.ViewContainerRef)
], AppApplicant.prototype, "parent", void 0);
AppApplicant = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'products',
        templateUrl: 'html/app.applicants.component.html',
        providers: [service_1.MembersService]
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], AppApplicant);
exports.AppApplicant = AppApplicant;
//# sourceMappingURL=applicants.component.js.map