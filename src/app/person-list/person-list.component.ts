import { Component, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  /*
   with 'onpush' change detection, components which rely solely on
   input can skip change detection until those input references change,
   this can supply a significant performance boost
   */
})
export class PersonListComponent {

  /*
   "dumb" components do nothing but display data based on input and
   emit relevant events back up for parent, or "container" components to handle
   */
  @Input() people;
  @Output() addGuest = new EventEmitter();
  @Output() removeGuest = new EventEmitter();
  @Output() removePerson = new EventEmitter();
  @Output() toggleAttending = new EventEmitter();

}
