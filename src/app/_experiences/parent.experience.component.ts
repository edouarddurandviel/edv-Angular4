// Component decorators
import { Component, OnInit, ViewContainerRef, AfterViewInit, DoCheck, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
// Home-made Interfaces - Services
import { Member } from './member';
import { IntMembers } from './_interfaces/members';
import { MembersService } from './_service/members.service';
import { AppMembers } from './members.component';
// From http injectable get Map operator
import 'rxjs/add/operator/map';

@Component ({
    moduleId: module.id,
    templateUrl: '_html/app.member.description.component.html',
    providers: [ExperienceService]
})
export class ParentAppExperience implements OnInit, AfterViewInit {

  @ViewChild('parents', { read: ViewContainerRef }) // Target seletor
  parents: ViewContainerRef;

  @Input() model: Experience; // Form model name
  experiences: Experience[] = []; // Input Object

  added: boolean;

  // Constructor
  constructor(
    private _members: ExperienceService, // Create Memeber
    private componentFactoryResolver: ComponentFactoryResolver // SwithView
  ) {



  }

  // Life cycle
  ngOnInit(): void {
      this.model = new Experience();
  }

  ngAfterViewInit(): void {
      this._load_ListComponent();
  }

    _onSubmit(experience: Experience): void {
          // Submit form
          this._members.createMember(experience)
      .then(experience => {
          this.members.push(experience);
      });
        this.parents.clear();
        this.ngAfterViewInit();
    }

    _load_ListComponent(): void {
        const newAppMembers = this.componentFactoryResolver.resolveComponentFactory(AppMembers);
        setTimeout( () => {
            this.parents.createComponent(newAppMembers);
        }, 500 );
    }

}
