// Component decorators
import { Component, OnInit, AfterViewInit, ViewChild, Input, module} from '@angular/core';

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
    templateUrl: '_html/edit.experience.component.html',
    providers: [ExperienceService]
})

export class AppEditExperience implements OnInit, AfterViewInit {

  @Input() model: Experience; // Form model name
  experiences: Experience[] = []; // Input Object

  added: boolean;

  // Constructor
  constructor(
    private _members: ExperienceService, // Create Memeber
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  // Life cycle
  ngOnInit(): void {
      this.model = new Experience();
  }

  ngAfterViewInit(): void {

  }

    _onPatch(experience: Experience): void {
      // Submit form
      this.route.paramMap
      .switchMap((params: ParamMap) => this._members.createMemberObserv(+params.get('id'), experience))
      .subscribe(experience => {
          this.experiences.push(experience);
        });
        // add link to list
    }

}
