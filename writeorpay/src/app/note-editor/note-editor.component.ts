import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';
import * as AppActions from "../store/app.actions";
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';

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
  public content: string;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.today = moment();
    this.contentForm = new FormControl('');
    this.titleForm = new FormControl('');
    this._store
      .pipe(select(a => a.appState.currentNoteId))
      .subscribe(currentNoteId => {
      
        if (currentNoteId) {

        const notes$ = this._store.pipe(select(a => a.appState.notes)).subscribe(notes => {
          const note = notes.filter(a => a.id === currentNoteId)[0];
          this.formattedDate = note.getFormattedUpdatedDate() || this.today.format('dddd, MMMM DD, YYYY');

          // make sure emitEvent: false to not create a circular shit storm
          this.contentForm.patchValue(note.content, {emitEvent: false});
          this.titleForm.patchValue(note.title, {emitEvent: false});
        });

      } else {
        this.formattedDate = this.today.format('dddd, MMMM DD, YYYY');
      }
    });

    this.contentForm.valueChanges
      .pipe(debounceTime(500)) // using debounce (ms) to buffer how often changes log
      .subscribe(val => {
      this.content = val;
      this.contentChanged(val);
    });;

    this.titleForm.valueChanges
      .pipe(debounceTime(500)) // using debounce (ms) to buffer how often changes log
      .subscribe(val => {
      this.titleChanged(val);
    });;
  }

  public contentChanged(content: string){
    this._store.dispatch(new AppActions.NoteContentChanged(content));
  }

  public titleChanged(content: string){
    this._store.dispatch(new AppActions.NoteTitleChanged(content));
  }

}
