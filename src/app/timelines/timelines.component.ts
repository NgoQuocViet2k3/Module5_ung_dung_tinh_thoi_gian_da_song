import {Component, OnInit} from '@angular/core';
import {DateUnitService} from '../service/date-unit.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  output = '';

  constructor(private dateUtilService: DateUnitService) {
  }

  ngOnInit() {
  }

  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
