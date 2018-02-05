import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// movie services
import { AppComponent } from './app.component';
import { ContentService } from './content.services';

import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ ContentService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
