// Component decorators
import { Component } from '@angular/core';
// From http injectable get Map operator
import 'rxjs/add/operator/map';

// Decorator for MetaData invoquing Components Edouard
@Component ({
   selector: 'demo-app',
   templateUrl: './app.component.html'
})
export class AppComponent  {

  name: string = 'Edouard Durand-Viel CV-Tech';
  appStatus: boolean = true;

}
