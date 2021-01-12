// Component decorators
import { Component, OnInit, ViewContainerRef, AfterViewInit, DoCheck, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
// Home-made Interfaces - Services
import { Member } from './member';
import { IntMembers } from './_interfaces/members';
import { MembersService } from './_service/members.service';
import { AppListMembers } from './list.members.component';
// From http injectable get Map operator
import 'rxjs/add/operator/map';

@Component ({
    moduleId: module.id,
    templateUrl: '_html/add.members.component.html',
    providers: [MembersService]
})
export class AppAddMembers implements OnInit, AfterViewInit {

  @ViewChild('ng-parents', { read: ViewContainerRef }) // Target seletor
  parents: ViewContainerRef;

  @Input() model: Member; // Form model name
  members: Member[] = []; // Input Object

  addedMember: boolean;

  // Constructor
  constructor(
    private _members: MembersService, // Create Memeber
    private componentFactoryResolver: ComponentFactoryResolver // SwithView
  ) {}

  // Life cycle
  ngOnInit(): void {
      this.model = new Member();
  }

  ngAfterViewInit(): void {
      this._load_ListComponent();
  }

    _onSubmit(member: Member): void {
          // Submit form
        this._members.createMemberObserv(member).subscribe();

          // Reload child component
          this.parents.clear();
          setTimeout( () => {
          this.ngAfterViewInit();
        }, 300);
      }


    _load_ListComponent(): void {
        const newAppMembers = this.componentFactoryResolver.resolveComponentFactory(AppListMembers);
        this.parents.createComponent(newAppMembers);

    }

}
