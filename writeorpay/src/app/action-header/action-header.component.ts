import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/app.reducer';
import * as AppActions from "../store/app.actions";

@Component({
  selector: 'app-action-header',
  templateUrl: './action-header.component.html',
  styleUrls: ['./action-header.component.scss']
})
export class ActionHeaderComponent implements OnInit {

  constructor(private _store: Store<State>) { }

  ngOnInit() {
  }

  private collapsePanel() {
    console.log('toggle presed');
    this._store.dispatch(new AppActions.ToggleExpanderAction());
  }

}
