// App Root module
// Ng Modules library
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// tree components
import { AppComponent }  from './app.component';
import { AppAddMembers } from './_members/add.members.component';
import { AppListMembers } from './_members/list.members.component';
import { AppAddExperience } from './_experiences/add.experience.component';
import { AppListExperiences } from './_experiences/list.experience.component';

// Dynamic component view
import { AppApplicant } from './_nestedviews/applicants.component';

// tools components
import { TruncatePipe } from './_truncate/truncate';
import { BreadcrumbComponent } from './_breadcrumb/app.breadcrumb.component';

// Route Init
const appRoutes: Routes = [
  {path: 'Members', component: AppAddMembers, data: {breadcrumb: 'Les membres'} },
  {path: 'Members/:id', component: AppAddExperience, data: {breadcrumb: 'Profil description', name: ':firstname'} },
  {path: 'BuildList', component: AppApplicant, data: {breadcrumb: 'Créer une liste de membres'} }
];

// 1.NgModule MetaData Decorators imported from BrowserModule
// 2. bootstrap in main.ts 2 options: dynamic JIT 'just in time' (slower), and static AOT 'ahead of time' (faster)
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, AppAddMembers, AppListMembers, AppAddExperience, AppListExperiences, AppApplicant, TruncatePipe, BreadcrumbComponent],
  bootstrap:    [ AppComponent ],
  entryComponents: [AppListMembers, AppListExperiences]
})


export class AppModule { }
