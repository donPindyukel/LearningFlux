import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import {
  ADD_PERSON,
  REMOVE_PERSON,
  ADD_GUEST,
  REMOVE_GUEST,
  TOGGLE_ATTENDING
} from './core/actions';
import { id } from './core/id.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public model;
  public people;
  public filter;
  public attending;
  public guests;
  private subscription;

  constructor(private _store: Store<any>) {
    /*
     Every time people or partyFilter emits, pass the latest
     value from each into supplied function. We can then calculate
     and output statistics.
     */
    this.model = Observable.combineLatest(
      _store.select('people'),
      _store.select('partyFilter'),
      (people, filter) => {
        return {
          total: people['length'],
          people: people['filter'](filter),
          attending: people['filter'](person => person.attending).length,
          guests: people['reduce']((acc, curr) => acc + curr.guests, 0)
        };
      });
  }

  addPerson(name){
    this._store.dispatch({type: ADD_PERSON, payload: {id: id(), name}});
  }

  addGuest(id){
    this._store.dispatch({type: ADD_GUEST, payload: id});
  }

  removeGuest(id){
    this._store.dispatch({type: REMOVE_GUEST, payload: id});
  }

  removePerson(id){
    this._store.dispatch({type: REMOVE_PERSON, payload: id});
  }

  toggleAttending(id){
    this._store.dispatch({type: TOGGLE_ATTENDING, payload: id});
  }

  updateFilter(filter){
    this._store.dispatch({type: filter});
  }

}

