// Component decorators
import { Component, Optional,  OnInit } from '@angular/core';
import { AppListExperiences } from './list.experience.component';

// Description du profil pour un membre donné.
import { IntMembers } from '../_members/_interfaces/members';

// liste des experiences pro pour un membre
import { IntExperiences } from './_interfaces/experience';
import { ExperienceService } from './_service/experiences.service';

// liste des compétences
import { IntMemberWithSkills } from '../_members/_interfaces/membersWithSkills';

// Routeur
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
// From http injectable get Map operator
import 'rxjs/add/operator/switchMap';

@Component ({
   moduleId: module.id,
   selector: 'ng-products-desc',
   templateUrl: '_html/app.description.component.html',
   providers: [ExperienceService]
})
export class AppExperienceDescription implements OnInit{

  iProfil: IntExperiences[];

  iMemberSummary: IntMembers[];

  iSkills: IntMemberWithSkills[];

  constructor(
    private _member: ExperienceService,
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit(): void {
        this._initMember();
        this._initDetails();
      /*  this._initSkills();*/
  }

  _initMember(): void{
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
/*  _initSkills(): void {
    // skills
    this.route.paramMap
      .switchMap((params: ParamMap) => this._member
      .getMemberSkills(+params.get('id')))
      .subscribe(iSkills => this.iSkills = iSkills);
  }*/


}
