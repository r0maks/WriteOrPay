import Note from '../models/note';
import * as appActions from './app.actions';
import { ActionReducer, Action } from '@ngrx/store';
import * as moment from 'moment';
import { Moment } from 'moment';

export interface State {
    notes: Note[],
    contentExpanded: boolean;
    currentNoteId: string;
};

export const initialState: State = {
    notes: [],
    contentExpanded: false,
    currentNoteId: null,
};

export const reducer: ActionReducer<State> = (state: State = initialState, action: appActions.AppActions) => {
    switch (action.type) {

        case appActions.TOGGLE_EXPANDER:
            return {
                ...state,
                contentExpanded: !state.contentExpanded
            };
        case appActions.CLOSE_CURRENT_NOTE:
            return {
                ...state,
                currentNoteId: null,
            };
        case appActions.SELECT_NOTE:
            return {
                ...state,
                currentNoteId: action.noteId,
            };
        case appActions.NEW_NOTE:
            const note = new Note();
            const notes = state.notes;
            note.title = 'note title'
            note.createdDate = moment();
            notes.push(note);
            return {
                ...state,
                notes: notes,
                currentNoteId: note.id,
            };
        default:
            return state;
    }
};

