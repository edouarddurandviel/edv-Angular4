// Component decorators
import { Component, OnInit} from '@angular/core';
// Home-made Interfaces - Services
import { IntMembers } from './_interfaces/members';
import { MembersService } from './_service/members.service';
// From http injectable get Map operator
import 'rxjs/add/operator/map';


@Component ({
    moduleId: module.id,
    selector: 'ng-products',
    templateUrl: '_html/members.component.html',
    providers: [MembersService]
})
export class AppListMembers implements OnInit {

  mainTitle: string = "Member List of CV's";
  imembers: IntMembers[]; // Members Interface

  // Empty Constructor
  constructor(private _members: MembersService) {}

  ngOnInit(): void {
      this._initMembers(); // Init Members
  }

  _initMembers(): void {
      this._members.getMembers().subscribe( imembers => this.imembers = imembers ); // Members list
  }
}
