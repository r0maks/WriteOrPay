import { Action } from '@ngrx/store';

export const TOGGLE_EXPANDER = 'TOGGLE_EXPANDER'
export const CLOSE_CURRENT_NOTE = 'CLOSE_CURRENT_NOTE';
export const SELECT_NOTE = 'SELECT_NOTE';
export const NEW_NOTE = 'NEW_NOTE';
export const NOTE_CONTENT_CHANGED = 'NOTE_CONTENT_CHANGED';
export const NOTE_TITLE_CHANGED = 'NOTE_TITLE_CHANGED';
export const SEARCH_TOGGLED = 'SEARCH_TOGGLED';
export const SEARCH_CHANGED = 'SEARCH_CHANGED';
export const SEARCH_CLEARED = 'SEARCH_CLEARED';

export class ToggleExpander implements Action {
  readonly type = TOGGLE_EXPANDER;
  constructor() { }
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
  constructor() { }
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
  NoteContentChanged |
  NoteTitleChanged | 
  SearchToggled | 
  SearchChanged |
  SearchCleared
