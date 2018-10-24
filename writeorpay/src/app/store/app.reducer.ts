import Note from '../models/note';
import * as appActions from './app.actions';
import { ActionReducer, Action } from '@ngrx/store';
import * as moment from 'moment';
import { getTestData } from './testdata'

export interface State {
    notes: Note[],
    filteredNotes: Note[],
    contentExpanded: boolean;
    currentNoteId: string;
    searchActive: boolean;
    searchTerms: string;
};

export const initialState: State = {
    notes: getTestData(),
    filteredNotes: null,
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

            // if search is toggled off, clear the search terms
            if (state.searchActive) {
                return {
                    ...state,
                    searchActive: !state.searchActive,
                    searchTerms: null,
                };
            } else {
                return {
                    ...state,
                    searchActive: !state.searchActive
                };
            }

        case appActions.SEARCH_CHANGED:

            const filteredNotes = Object.assign([], state.notes).filter(note => {
                return noteContains(note, action.searchTerms);
            });

            return {
                ...state,
                searchTerms: action.searchTerms,
                filteredNotes: filteredNotes
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

function noteContains(note: Note, searchTerms: string): boolean {
    const lowerSearchTerms = searchTerms.toLowerCase();
    
    if (note.content && note.content.toLowerCase().indexOf(lowerSearchTerms) >= 0) {
        return true;
    }

    if (note.title && note.title.toLowerCase().indexOf(lowerSearchTerms) >= 0) {
        return true;
    }

    return false;
}



