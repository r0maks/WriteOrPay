import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  private isExpanded$: Observable<boolean>;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.isExpanded$ = this._store.pipe(select(store => store.appState.contentExpanded));
  }
}
