// Component decorators
import { Component, OnInit, ViewContainerRef, AfterViewInit, DoCheck, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
// Home-made Interfaces - Services
import { Member } from './member';
import { IntMembers } from './_interfaces/members';
import { MembersService } from './_service/members.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs/Subject";
import { AppListMembers } from './list.members.component';
// From http injectable get Map operator
import 'rxjs/add/operator/map';

@Component ({
    moduleId: module.id,
    templateUrl: '_html/add.members.component.html',
    providers: [MembersService]
})
export class AppAddMembers implements OnInit, AfterViewInit {

  @ViewChild('parents', { read: ViewContainerRef }) // Target seletor
  parents: ViewContainerRef;

  @Input() model: Member; // Form model name
  members: Member[] = []; // Input Object

  added: boolean;

  // Constructor
  constructor(
    private _members: MembersService, // Create Memeber
    private componentFactoryResolver: ComponentFactoryResolver // SwithView
  ) {}

  // Life cycle
  ngOnInit(): void {

      var itemIds = new BehaviorSubject<number>(null);
      itemIds.switchMap(itemId => this._members.getMembers()).subscribe();

      this.model = new Member();
  }

  ngAfterViewInit(): void {

  }

    _onSubmit(member: Member): void {
          // Submit form
        this._members.createMemberObserv(member).subscribe();
        this.parents.clear();
    }

}
