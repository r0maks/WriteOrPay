import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {

  public today: Moment;
  public formattedDate: string;
  constructor() { }

  ngOnInit() {
    this.today = moment();
    this.formattedDate = this.today.format('dddd, MMMM DD, YYYY');
  }

}
