import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppActions from "../store/app.actions";
import { AppState } from '../store/reducers';

@Component({
  selector: 'app-action-header',
  templateUrl: './action-header.component.html',
  styleUrls: ['./action-header.component.scss']
})
export class ActionHeaderComponent implements OnInit {

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
  }

  private collapsePanel() {
    this._store.dispatch(new AppActions.ToggleExpander());
  }

}
