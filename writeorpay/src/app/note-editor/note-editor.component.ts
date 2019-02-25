import { Component, OnInit, ViewChild } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';
import * as AppActions from "../store/app.actions";
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { TextProcessorService } from '../text-logic/text-processor.service';
import { NOTE_DATE_FORMAT } from '../models/note';

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
  public textareaHeight = 200;

  @ViewChild('content') contentArea; 

  constructor(
    private _store: Store<AppState>,
    private _textProcessor: TextProcessorService,
  ) { }

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
          this.formattedDate =  this.today.format(NOTE_DATE_FORMAT);

          // make sure emitEvent: false to not create a circular shit storm
          this.contentForm.patchValue(note.content, {emitEvent: false});
          this.maintainContentHeight();
          this.titleForm.patchValue(note.title, {emitEvent: false});
        });

      } else {
        this.formattedDate = this.today.format(NOTE_DATE_FORMAT);
      }

      this.maintainContentHeight();
    });

    this.contentForm.valueChanges
      .subscribe(val => {
      this.contentChanged(this._textProcessor.processUserInput(val));
    });

    this.titleForm.valueChanges
      .pipe(debounceTime(500)) // using debounce (ms) to buffer how often changes log
      .subscribe(val => {
      this.titleChanged(val);
    });;
  }

  public maintainContentHeight() {
    const text = this.contentArea.nativeElement;
    this.do_resize(text);
  }
  
  public do_resize(textbox) {

    var txt = textbox.value as string;
    var cols = textbox.cols as number;

    var arraytxt = txt.split('\n');
    var rows = arraytxt.length as number;

    for (let i = 0; i < arraytxt.length; i++) {
      rows += arraytxt[i].length / cols;
    }

    textbox.rows = rows;
  }


  public contentChanged(content: string){
    this._store.dispatch(new AppActions.NoteContentChanged(content));
  }

  public titleChanged(content: string){
    this._store.dispatch(new AppActions.NoteTitleChanged(content));
  }

}
