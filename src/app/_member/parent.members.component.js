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
var members_component_1 = require("./members.component");
// From http injectable get Map operator
require("rxjs/add/operator/map");
var ParentAppMembers = (function () {
    // Constructor
    function ParentAppMembers(_members, // Create Memeber
        componentFactoryResolver // SwithView
    ) {
        this._members = _members;
        this.componentFactoryResolver = componentFactoryResolver; // SwithView
        this.members = []; // Input Object
    }
    // Life cycle
    ParentAppMembers.prototype.ngOnInit = function () {
        this.model = new member_1.Member();
    };
    ParentAppMembers.prototype.ngAfterViewInit = function () {
        this._load_ListComponent();
    };
    ParentAppMembers.prototype._onSubmit = function (member) {
        var _this = this;
        // Submit form
        this._members.createMember(member)
            .then(function (member) {
            _this.members.push(member);
        });
        this.parents.clear();
        this.ngAfterViewInit();
    };
    ParentAppMembers.prototype._load_ListComponent = function () {
        var _this = this;
        var newAppMembers = this.componentFactoryResolver.resolveComponentFactory(members_component_1.AppMembers);
        setTimeout(function () {
            _this.parents.createComponent(newAppMembers);
        }, 500);
    };
    return ParentAppMembers;
}());
__decorate([
    core_1.ViewChild('parents', { read: core_1.ViewContainerRef }) // Target seletor
    ,
    __metadata("design:type", core_1.ViewContainerRef)
], ParentAppMembers.prototype, "parents", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", member_1.Member)
], ParentAppMembers.prototype, "model", void 0);
ParentAppMembers = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: '_html/app.parentmembers.component.html',
        providers: [members_service_1.MembersService]
    }),
    __metadata("design:paramtypes", [members_service_1.MembersService,
        core_1.ComponentFactoryResolver // SwithView
    ])
], ParentAppMembers);
exports.ParentAppMembers = ParentAppMembers;
//# sourceMappingURL=parent.members.component.js.map