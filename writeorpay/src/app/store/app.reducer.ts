import Note from '../models/note';
import * as appActions from './app.actions';
import { ActionReducer, Action } from '@ngrx/store';
import * as moment from 'moment';
import { getTestData } from './testdata'

export interface State {
    notes: Note[],
    contentExpanded: boolean;
    currentNoteId: string;
    searchActive: boolean;
    searchTerms: string;
};

export const initialState: State = {
    notes: getTestData(),
    contentExpanded: false,
    currentNoteId: null,
    searchActive: false,
    searchTerms: null,
};

export const reducer: ActionReducer<State> = (state: State = initialState, action: appActions.AppActions) => {
    switch (action.type) {

        case appActions.TOGGLE_EXPANDER:
            return {
                ...state,
                contentExpanded: !state.contentExpanded
            };
        case appActions.NOTE_CONTENT_CHANGED:
            const allNotes = Object.assign([], state.notes);
            if (state.currentNoteId) {
                const changingNote = allNotes.find(x => x.id == state.currentNoteId);
                changingNote.content = action.content;
                changingNote.lastUpdatedDate = moment();
                return {
                    ...state,
                    notes: allNotes,
                };
            }
            return {
                ...state,
            };
        case appActions.NOTE_TITLE_CHANGED:
            const allNotes2 = Object.assign([], state.notes);
            if (state.currentNoteId) {
                const changingNote = allNotes2.find(x => x.id == state.currentNoteId);
                changingNote.title = action.title;
                changingNote.lastUpdatedDate = moment();
                return {
                    ...state,
                    notes: allNotes2,
                };
            }
            return {
                ...state,
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
        case appActions.SEARCH_TOGGLED:
            return {
                ...state,
                searchActive: !state.searchActive
            };
        case appActions.SEARCH_CHANGED:
            return {
                ...state,
                searchTerms: action.searchTerms
            };
        case appActions.NEW_NOTE:
        const newDate = moment();
            const note = new Note();
            note.createdDate = newDate;
            note.lastUpdatedDate = newDate;
            const notes = state.notes;
            notes.unshift(note); // unshift because note should always be the first in the array
            return {
                ...state,
                notes: notes,
                currentNoteId: note.id,
            };
        default:
            return state;
    }
};

