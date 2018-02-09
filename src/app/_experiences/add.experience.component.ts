// Component decorators
import { Component, OnInit, ViewContainerRef, AfterViewInit, DoCheck, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';

import { IntMembers } from '../_members/_interfaces/members';
import { MembersService } from '../_members/_service/members.service';

// Home-made Interfaces - Services
import { Experience } from './experience';
import { IntExperiences } from './_interfaces/experience';
import { ExperienceService } from './_service/experiences.service';
import { AppListExperiences } from './list.experience.component';
// From http injectable get Map operator
import 'rxjs/add/operator/map';

// Routeur
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
// From http injectable get Map operator
import 'rxjs/add/operator/switchMap';

@Component ({
    moduleId: module.id,
    templateUrl: '_html/add.experience.component.html',
    providers: [ExperienceService]
})

export class AppAddExperience implements OnInit, AfterViewInit {

  @ViewChild('pro', { read: ViewContainerRef }) // Target seletor
  pro: ViewContainerRef;

  @Input() model: Experience; // Form model name

  experiences: Experience[] = []; // Input Object

  added: boolean;

  // Constructor
  constructor(
    private _members: ExperienceService, // Create Memeber
    private componentFactoryResolver: ComponentFactoryResolver, // SwithView
    private route: ActivatedRoute,
    private location: Location
  ) {}

  // Life cycle
  ngOnInit(): void {
      this.model = new Experience();
  }

  ngAfterViewInit(): void {
      this._load_ListComponent();
  }

    _onSubmit(experience: Experience): void {
      // Submit form
      this.route.paramMap
      .switchMap((params: ParamMap) => this._members.createMemberObserv(+params.get('id'), experience))
      .subscribe();
        this.pro.clear();
        setTimeout( () => {
        this.ngAfterViewInit();
        }, 500 );
    }

    _load_ListComponent(): void {
        const newAppExperiences = this.componentFactoryResolver.resolveComponentFactory(AppListExperiences);
        this.pro.createComponent(newAppExperiences);
    }

}
