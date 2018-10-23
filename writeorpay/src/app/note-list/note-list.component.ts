import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/reducers';
import * as AppActions from "../store/app.actions";
import { Observable } from 'rxjs';
import Note from '../models/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  private notes$: Observable<Note[]>;
  private isSearching$: Observable<boolean>;
  private searchTerm$: Observable<string>;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.isSearching$ = this._store.pipe(select(store => store.appState.searchActive));
    this.searchTerm$ = this._store.pipe(select(store => store.appState.searchTerms));
    this.notes$ = this._store.pipe(select(store => store.appState.notes));
  }

  newNote(){
    this._store.dispatch(new AppActions.NewNote());
  }

  selectNote(noteId: string) {
    this._store.dispatch(new AppActions.SelectNote(noteId));
  }

}
