import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import "./rx-js.operators";

import { AppComponent } from './app.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { PersonListComponent } from './person-list/person-list.component';

import { people } from './core/people.reducer';
import { partyFilter } from './core/party-filter.reducer';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { PartyStatsComponent } from './party-stats/party-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonInputComponent,
    PersonListComponent,
    FilterSelectComponent,
    PartyStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({people, partyFilter})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
