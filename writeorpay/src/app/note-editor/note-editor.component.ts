import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';
import * as AppActions from "../store/app.actions";
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {

  public today: Moment;
  public formattedDate: string;
  public contentForm: FormControl;
  public titleForm: FormControl;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.today = moment();
    this.formattedDate = this.today.format('dddd, MMMM DD, YYYY');
    this.contentForm = new FormControl('');
    this.titleForm = new FormControl('');

    this.contentForm.valueChanges.subscribe(val => {
      this.contentChanged(val);
    });

    this.titleForm.valueChanges.subscribe(val => {
      this.titleChanged(val);
    });
  }

  public contentChanged(content: string){
    this._store.dispatch(new AppActions.NoteContentChanged(content));
  }

  public titleChanged(content: string){
    this._store.dispatch(new AppActions.NoteTitleChanged(content));
  }

}
