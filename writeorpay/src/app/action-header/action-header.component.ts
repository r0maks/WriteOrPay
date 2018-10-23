import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as AppActions from "../store/app.actions";
import { AppState } from '../store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-action-header',
  templateUrl: './action-header.component.html',
  styleUrls: ['./action-header.component.scss']
})
export class ActionHeaderComponent implements OnInit {

  private isExpanded$: Observable<boolean>;
  private noteSelected: boolean;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.isExpanded$ = this._store.pipe(select(store => store.appState.contentExpanded));
    this._store.pipe(select(a => a.appState.currentNoteId)).subscribe(cn => {
      this.noteSelected = cn ? true : false;
    });
  }

  private collapsePanel() {
    this._store.dispatch(new AppActions.ToggleExpander());
  }

  private closeCurrentNote() {
    this._store.dispatch(new AppActions.CloseCurrentNote());
  }

}
