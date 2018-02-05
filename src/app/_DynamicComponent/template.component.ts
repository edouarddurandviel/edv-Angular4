// ListComponent
import { Component, Input } from '@angular/core';
import { IntDynamicComponent } from './Interface/Interface.component';

@Component({
  template: `
    <div class="members">
      <h4>{{data.firstname}} {{data.lastname}}</h4>
      <h5>{{data.jobtitle}}</h5>
    </div>
  `
})
export class TemplateMembersComponent implements IntDynamicComponent {

  @Input() data: any;

}
