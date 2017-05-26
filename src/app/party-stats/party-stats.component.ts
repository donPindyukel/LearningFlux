import { Component, OnInit, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-party-stats',
  templateUrl: './party-stats.component.html',
  styleUrls: ['./party-stats.component.css']
})
export class PartyStatsComponent implements OnInit {

  @Input() invited;
  @Input() attending;
  @Input() guests;

  constructor() { }

  ngOnInit() {

  }

}
