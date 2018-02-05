"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// App Root module
// Ng Modules library
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
// tree components
var app_component_1 = require("./app.component");
var add_members_component_1 = require("./_members/add.members.component");
var list_members_component_1 = require("./_members/list.members.component");
var add_experience_component_1 = require("./_experiences/add.experience.component");
var list_experience_component_1 = require("./_experiences/list.experience.component");
// Dynamic component view
var applicants_component_1 = require("./_nestedviews/applicants.component");
// tools components
var truncate_1 = require("./_truncate/truncate");
var app_breadcrumb_component_1 = require("./_breadcrumb/app.breadcrumb.component");
// Route Init
var appRoutes = [
    { path: 'Members', component: add_members_component_1.AppAddMembers, data: { breadcrumb: 'Les membres' } },
    { path: 'Members/:id', component: add_experience_component_1.AppAddExperience, data: { breadcrumb: 'Profil description', name: ':firstname' } },
    { path: 'BuildList', component: applicants_component_1.AppApplicant, data: { breadcrumb: 'Créer une liste de membres' } }
];
// 1.NgModule MetaData Decorators imported from BrowserModule
// 2. bootstrap in main.ts 2 options: dynamic JIT 'just in time' (slower), and static AOT 'ahead of time' (faster)
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, add_members_component_1.AppAddMembers, list_members_component_1.AppListMembers, add_experience_component_1.AppAddExperience, list_experience_component_1.AppListExperiences, applicants_component_1.AppApplicant, truncate_1.TruncatePipe, app_breadcrumb_component_1.BreadcrumbComponent],
        bootstrap: [app_component_1.AppComponent],
        entryComponents: [list_members_component_1.AppListMembers, list_experience_component_1.AppListExperiences]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map