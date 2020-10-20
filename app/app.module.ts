import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptMaterialCardViewModule } from "@nativescript-community/ui-material-cardview/angular";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WelcomeComponent } from './screens/welcome.component';
import { HomeComponent } from './screens/home.component';
import { DestinationDetailComponent } from './screens/destination-details.component';

import { TabsComponent } from './components/tabs.component';
import { CategorySelectionComponent } from './components/category-selection.component';
import { SearchComponent } from './components/search.component';
import { DestinationCardsComponent } from './components/destination-cards.component';
import { DestinationActivitiesComponent } from './components/destination-activities.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    DestinationCardsComponent,
    SearchComponent,
    CategorySelectionComponent,
    TabsComponent,
    DestinationDetailComponent,
    DestinationActivitiesComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptMaterialCardViewModule
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }

