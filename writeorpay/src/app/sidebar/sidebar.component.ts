import { Component, OnInit } from '@angular/core';
import * as AppActions from "../store/app.actions";
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
  }

  newNote() {
    this._store.dispatch(new AppActions.NewNote());
  }
}
