import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {month, nextMonth, previousMonth} from '../variables';

@Component({
  selector: 'app-date-navigator',
  templateUrl: './date-navigator.component.html',
  styleUrls: ['./date-navigator.component.scss']
})
export class DateNavigatorComponent implements OnInit {

  @Output() update: EventEmitter<any> = new EventEmitter();

  month = new Date();

  constructor() {
  }

  ngOnInit(): void {
    this.getAccountData()
  }


  previousMonth() {
    previousMonth();
    this.getAccountData();
  }


  nextMonth() {
    nextMonth();
    this.getAccountData();
  }

  getAccountData() {
    const date = new Date();
    date.setMonth(date.getMonth() + month);
    this.month = date;
    this.update.emit();
  }
}
