import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-calendar-pane',
  templateUrl: './calendar-pane.component.html',
  styleUrls: ['./calendar-pane.component.scss']
})
export class CalendarPaneComponent implements OnInit {

  public yearText: string;
  public monthText: string;
  public today: Moment;
  public numDaysInMonth: number;
  public daysInMonth = [];
  public selectedMonth: Moment; // really a date that represents the selected month

  constructor() { }

  ngOnInit() {
    this.today = moment();
    this.initCalendar();
  }

  public initCalendar() {
    if (!this.selectedMonth) {
      this.selectedMonth = moment();
    }

    this.yearText = this.selectedMonth.format('YYYY');
    this.monthText = this.selectedMonth.format('MMMM');
    this.numDaysInMonth = this.selectedMonth.daysInMonth();
    
    this.daysInMonth = [];
    for (let i = 0; i < this.numDaysInMonth; i++) {
      this.daysInMonth.push({date: i + 1});
    }
  }

  getColor(day) {
    if (day.date > 6) {
      return 'green';
    } else {
      return 'red';
    }
  }

  public monthUp() {
    this.selectedMonth = this.selectedMonth.add(1, 'months');
    this.initCalendar();
  }

  public monthDown() {
    this.selectedMonth = this.selectedMonth.subtract(1, 'months');
    this.initCalendar();
  }

}
