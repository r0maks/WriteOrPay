import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
    catchError,
    map,
    mergeMap,
    withLatestFrom,
    exhaustMap
} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppState } from './reducers';
import { Observable, of, from } from 'rxjs';
import * as AppActions from './app.actions';
import { NoteService } from '../note.service';
@Injectable()
export class AppEffects {

    constructor(
        private actions$: Actions,
        private store$: Store<AppState>,
        private noteService: NoteService,
    ) { }

    @Effect()
    public getNotes$: Observable<Action> = this.actions$.pipe(
        ofType(AppActions.GET_NOTES),
        exhaustMap((action) =>
            this.noteService.getNotes()
                .pipe(
                    map((result) => new AppActions.GetNotesSuccess(this.noteService.mapNotes(result))),
                // catchError(error => of(new UserActions.Error(error))),
            )
        ),
    )

    @Effect()
    public addNote = this.actions$.pipe(
        ofType<AppActions.NewNote>(AppActions.NEW_NOTE),
        map(action => action.newNote),
        exhaustMap((note) =>
            // call the service
            from(this.noteService.createNote(note))
                .pipe(
                    map((result) => new AppActions.NewNoteSuccess(note),
                    ),
            )));

    @Effect()
    public changeTitle = this.actions$.pipe(
        ofType<AppActions.NoteTitleChanged>(AppActions.NOTE_TITLE_CHANGED),
        map(action => action),
        exhaustMap((action) =>
            // call the service
            from(this.noteService.changeTitle(action.noteId, action.title))
                .pipe(
                    map((result) => new AppActions.NoteTitleChangedSuccess(),
                    ),
            )));

    @Effect()
    public changeContent = this.actions$.pipe(
        ofType<AppActions.NoteContentChanged>(AppActions.NOTE_CONTENT_CHANGED),
        map(action => action),
        exhaustMap((action) =>
            // call the service
            from(this.noteService.changeContent(action.noteId, action.content))
                .pipe(
                    map((result) => new AppActions.NoteContentChangedSuccess(),
                    ),
            )));
}