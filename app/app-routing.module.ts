import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';

import { HomeComponent } from './screens/home.component';
import { WelcomeComponent } from './screens/welcome.component';
import { DestinationDetailComponent } from './screens/destination-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'destinations/:id', component: DestinationDetailComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [ NativeScriptRouterModule ]
})
export class AppRoutingModule { }
