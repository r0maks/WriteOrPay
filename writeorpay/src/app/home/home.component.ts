import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private isExpanded$: Observable<boolean>;
  private currentNoteId$: Observable<string>;
  public edittingNote: boolean;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.isExpanded$ = this._store.pipe(select(store => store.appState.contentExpanded));
    this.currentNoteId$ = this._store.pipe(select(store => store.appState.currentNoteId));
    this.currentNoteId$.subscribe(val => {
      if (val) {
        this.edittingNote = true;
      } else {
        this.edittingNote = false;
      }
    });
  }

}
