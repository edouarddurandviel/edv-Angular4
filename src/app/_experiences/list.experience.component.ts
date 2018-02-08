// Component decorators
import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
// Home-made Interfaces - Services
import { Experience } from './experience';
import { IntExperiences } from './_interfaces/experience';
import { ExperienceService } from './_service/experiences.service';

import { IntMembers } from '../_members/_interfaces/members';
import { IntMemberWithSkills } from '../_members/_interfaces/membersWithSkills';

// Routeur
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
// From http injectable get Map operator
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component ({
    moduleId: module.id,
    selector: 'experiences',
    templateUrl: '_html/experiences.component.html',
    providers: [ExperienceService]
})
export class AppListExperiences implements OnInit{

  @Input() model: Experience;

  mainTitle: string = "Experiences";

  iProfil: IntExperiences[];

  iMemberSummary: IntMembers[];

  iSkills: IntMemberWithSkills[];


  constructor(
    private _member: ExperienceService,
    private route: ActivatedRoute,
    private location: Location) {}


  ngOnInit(): void {
      this._initMember(); // Init Members
      this._initDetails();
  }


  _initMember(): void {
    // get Member with Id
    this.route.paramMap
      .switchMap((params: ParamMap) => this._member
      .getMemberProfil(+params.get('id')))
      .subscribe(iMemberSummary => this.iMemberSummary = iMemberSummary);
  }
  _initDetails(): void {
    // experiences details
    this.route.paramMap
      .switchMap((params: ParamMap) => this._member
      .getMemberExperiences(+params.get('id')))
      .subscribe(iProfil => this.iProfil = iProfil);
  }

  getUpdateForm(memberId: number, id: number): void {
    // get Experience with Id and member Id
    this._member.getThisMemberExperience(memberId, id)
      .subscribe(experiences => experiences = experiences);
  }

}
