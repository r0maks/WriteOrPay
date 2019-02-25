import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/reducers';
import * as AppActions from "../store/app.actions";
import { Observable } from 'rxjs';
import Note, { NOTE_DATE_FORMAT } from '../models/note';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  private notes$: Observable<Note[]>;
  private filteredNotes$: Observable<Note[]>;
  private isSearching$: Observable<boolean>;
  private searchTerm$: Observable<string>;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.isSearching$ = this._store.pipe(select(store => store.appState.searchActive));
    this.searchTerm$ = this._store.pipe(select(store => store.appState.searchTerms));
    this.notes$ = this._store.pipe(select(store => store.appState.notes));
    this.filteredNotes$ = this._store.pipe(select(store => store.appState.filteredNotes));
  }

  newNote(){
    this._store.dispatch(new AppActions.NewNote(new Note()));
  }

  selectNote(noteId: string) {
    this._store.dispatch(new AppActions.SelectNote(noteId));
  }

  getFormattedUpdatedDate(note: Note): string {
    if (note) {
      moment(note.lastUpdatedDate).format(NOTE_DATE_FORMAT);
    }
    return null;
  }

}
