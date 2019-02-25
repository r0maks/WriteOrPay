import { Action } from '@ngrx/store';
import Note from '../models/note';

export const TOGGLE_EXPANDER = 'TOGGLE_EXPANDER'
export const CLOSE_CURRENT_NOTE = 'CLOSE_CURRENT_NOTE';
export const SELECT_NOTE = 'SELECT_NOTE';

export const NEW_NOTE = 'NEW_NOTE';
export const NEW_NOTE_SUCCESS = 'NEW_NOTE_SUCCESS';
export const NEW_NOTE_ERROR = 'NEW_NOTE_ERROR';

export const NOTE_CONTENT_CHANGED = 'NOTE_CONTENT_CHANGED';
export const NOTE_TITLE_CHANGED = 'NOTE_TITLE_CHANGED';
export const SEARCH_TOGGLED = 'SEARCH_TOGGLED';
export const SEARCH_CHANGED = 'SEARCH_CHANGED';
export const SEARCH_CLEARED = 'SEARCH_CLEARED';

export const GET_NOTES = 'GET_NOTES';
export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS';
export const GET_NOTES_ERROR = 'GET_NOTES_ERROR';

export class ToggleExpander implements Action {
  readonly type = TOGGLE_EXPANDER;
  constructor() { }
}
export class GetNotes implements Action {
  readonly type = GET_NOTES;
  constructor() { }
}

export class GetNotesSuccess implements Action {
  readonly type = GET_NOTES_SUCCESS;
  constructor(public notes: any[]) { }
}

export class CloseCurrentNote implements Action {
  readonly type = CLOSE_CURRENT_NOTE;
  constructor() { }
}
export class SelectNote implements Action {
  readonly type = SELECT_NOTE;
  constructor(public noteId: string) { }
}
export class NewNote implements Action {
  readonly type = NEW_NOTE;
  constructor(public newNote: Note) { }
}
export class NewNoteSuccess implements Action {
  readonly type = NEW_NOTE_SUCCESS;
  constructor(public newNote: Note) { }
}

export class NoteContentChanged implements Action {
  readonly type = NOTE_CONTENT_CHANGED;
  constructor(public content: string) { }
}
export class NoteTitleChanged implements Action {
  readonly type = NOTE_TITLE_CHANGED;
  constructor(public title: string) { }
}
export class SearchToggled implements Action {
  readonly type = SEARCH_TOGGLED;
  constructor() { }
}
export class SearchChanged implements Action {
  readonly type = SEARCH_CHANGED;
  constructor(public searchTerms: string) { }
}
export class SearchCleared implements Action {
  readonly type = SEARCH_CLEARED;
  constructor() { }
}

export type AppActions
  = 
  ToggleExpander | 
  CloseCurrentNote | 
  SelectNote | 
  NewNote |
  NewNoteSuccess |
  NoteContentChanged |
  NoteTitleChanged | 
  SearchToggled | 
  SearchChanged |
  SearchCleared |
  GetNotes | 
  GetNotesSuccess
