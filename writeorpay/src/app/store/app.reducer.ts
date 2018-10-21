import Note from '../models/note';
import * as appActions from './app.actions';
import { ActionReducer, Action } from '@ngrx/store';

export interface State {
    Notes: Note[],
    contentExpanded: boolean;
};

export const initialState: State = {
    Notes: [],
    contentExpanded: false,
};

export const reducer : ActionReducer<State> = (state : State = initialState, action: Action) => {
  switch(action.type) {
   
    case appActions.TOGGLE_EXPANDER:
    return {
        ... state,
        contentExpanded: !state.contentExpanded
      };
      default:
          return state;
  }
};

