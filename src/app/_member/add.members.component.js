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
var member_1 = require("./member");
var members_service_1 = require("./_service/members.service");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
// From http injectable get Map operator
require("rxjs/add/operator/map");
var AppAddMembers = /** @class */ (function () {
    // Constructor
    function AppAddMembers(_members, // Create Memeber
    componentFactoryResolver // SwithView
    ) {
        this._members = _members;
        this.componentFactoryResolver = componentFactoryResolver;
        this.members = []; // Input Object
    }
    // Life cycle
    AppAddMembers.prototype.ngOnInit = function () {
        var _this = this;
        var itemIds = new BehaviorSubject_1.BehaviorSubject(null);
        itemIds.switchMap(function (itemId) { return _this._members.getMembers(); }).subscribe();
        this.model = new member_1.Member();
    };
    AppAddMembers.prototype.ngAfterViewInit = function () {
    };
    AppAddMembers.prototype._onSubmit = function (member) {
        // Submit form
        this._members.createMemberObserv(member).subscribe();
        this.parents.clear();
    };
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
    return AppAddMembers;
}());
exports.AppAddMembers = AppAddMembers;
//# sourceMappingURL=add.members.component.js.map