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
// Home-made components
var app_component_1 = require("./app.component");
var photos_component_1 = require("./photos.component");
var product_component_1 = require("./product.component");
var photos_list_component_1 = require("./photos-list.component");
var truncate_1 = require("./truncate");
var app_breadcrumb_component_1 = require("./app.breadcrumb.component");
// Route Init
var appRoutes = [
    { path: 'Photos', component: photos_component_1.AppPhotos, data: { breadcrumb: 'Mon album' } },
    { path: 'Products', component: product_component_1.AppProducts, data: { breadcrumb: 'Mes Produits' } },
    { path: 'Albums/:id', component: photos_list_component_1.AppPhotosDesc, data: { breadcrumb: 'List' } }
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
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, photos_component_1.AppPhotos, product_component_1.AppProducts, photos_list_component_1.AppPhotosDesc, truncate_1.TruncatePipe, app_breadcrumb_component_1.BreadcrumbComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map