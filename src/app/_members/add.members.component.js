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
var member_1 = require("./member");
var members_service_1 = require("./_service/members.service");
var list_members_component_1 = require("./list.members.component");
// From http injectable get Map operator
require("rxjs/add/operator/map");
var AppAddMembers = (function () {
    // Constructor
    function AppAddMembers(_members, // Create Memeber
        componentFactoryResolver // SwithView
    ) {
        this._members = _members;
        this.componentFactoryResolver = componentFactoryResolver; // SwithView
        this.members = []; // Input Object
    }
    // Life cycle
    AppAddMembers.prototype.ngOnInit = function () {
        this.model = new member_1.Member();
    };
    AppAddMembers.prototype.ngAfterViewInit = function () {
        this._load_ListComponent();
    };
    AppAddMembers.prototype._onSubmit = function (member) {
        var _this = this;
        // Submit form
        this._members.createMember(member)
            .then(function (member) {
            _this.members.push(member);
        });
        this.parents.clear();
        setTimeout(function () {
            _this.ngAfterViewInit();
        }, 500);
    };
    AppAddMembers.prototype._load_ListComponent = function () {
        var newAppMembers = this.componentFactoryResolver.resolveComponentFactory(list_members_component_1.AppListMembers);
        this.parents.createComponent(newAppMembers);
    };
    return AppAddMembers;
}());
__decorate([
    core_1.ViewChild('parents', { read: core_1.ViewContainerRef }) // Target seletor
    ,
    __metadata("design:type", core_1.ViewContainerRef)
], AppAddMembers.prototype, "parents", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", member_1.Member)
], AppAddMembers.prototype, "model", void 0);
AppAddMembers = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: '_html/add.members.component.html',
        providers: [members_service_1.MembersService]
    }),
    __metadata("design:paramtypes", [members_service_1.MembersService,
        core_1.ComponentFactoryResolver // SwithView
    ])
], AppAddMembers);
exports.AppAddMembers = AppAddMembers;
//# sourceMappingURL=add.members.component.js.map