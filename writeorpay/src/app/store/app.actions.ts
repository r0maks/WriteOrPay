import { Action } from '@ngrx/store';

export const TOGGLE_EXPANDER = 'TOGGLE_EXPANDER'
export const CLOSE_CURRENT_NOTE = 'CLOSE_CURRENT_NOTE';
export const SELECT_NOTE = 'SELECT_NOTE';
export const NEW_NOTE = 'NEW_NOTE';

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

export type AppActions
  = 
  ToggleExpander | 
  CloseCurrentNote | 
  SelectNote | 
  NewNote
