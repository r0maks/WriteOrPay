import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import * as AppActions from "../store/app.actions";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
  }

  newNote(){
    this._store.dispatch(new AppActions.NewNote());
  }

}
