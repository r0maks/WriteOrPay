import { Component, OnInit } from '@angular/core';
import * as AppActions from "../store/app.actions";
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private searchBarVisible: boolean;
  private searchForm: FormControl;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.searchForm = new FormControl('');

    this.searchForm.valueChanges
      .pipe(debounceTime(100)) // using debounce (ms) to buffer how often changes log
      .subscribe(val => {
        this._store.dispatch(new AppActions.SearchChanged(val));
      });

    const sub = this._store.pipe(select(a => a.appState.searchActive))
      .subscribe(val => {
        this.searchBarVisible = val;
      });
  }

  newNote(){
    this._store.dispatch(new AppActions.NewNote());
  }

  searchClicked(){
    this._store.dispatch(new AppActions.SearchToggled());
  }

  searchToggledOff(){
    this._store.dispatch(new AppActions.SearchToggled());
  }

}
