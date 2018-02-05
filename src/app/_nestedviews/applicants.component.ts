import { Component, AfterViewInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import { Router } from '@angular/router';

// Services
import { MembersService } from './Service/service';
import { AppListMembers } from './../_members/list.members.component';

// Dynamic Component
//import { HostDirective } from './../_DynamicComponent/Directive/hosting.directive';
//import { IntDynamicComponent } from './../_DynamicComponent/Interface/Interface.Component';

//import { ListView } from './list.view';

// Interface
interface IntMembers {
  firstname: string;
  lastname: string;
  jobtitle: string;
  id: number;
}

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: 'html/app.applicants.component.html',
  providers: [MembersService]
})
export class AppApplicant implements AfterViewInit {

    mainTitle: string = "This component helps you to filter the output";

    @ViewChild('parent', {read: ViewContainerRef }) //Target seletor
     parent: ViewContainerRef;

    constructor( private componentFactoryResolver: ComponentFactoryResolver ){

    }

    ngAfterViewInit(): void {
      this.loadListComponent();
    }

    loadListComponent(): void {
      const newAppMembers = this.componentFactoryResolver.resolveComponentFactory(AppListMembers);
       this.parent.createComponent(newAppMembers);

    }


}
