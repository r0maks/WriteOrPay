import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Note from './models/note';
import * as moment from 'moment';
import { Moment } from 'moment';

@Injectable()
export class NoteService {

  constructor(private firestore: AngularFirestore) { }

  getNotes() {
    return this.firestore.collection('notes').get();
  }

  createNote(note: Note): Promise<void> {
    const now = moment().format();
    return this.firestore.collection('notes').doc(note.id).set({
      title: '',
      content: '',
      lastUpdatedDate: now,
      createdDate: now,
    });
  }

  changeTitle(noteId: string, title: string) {
    const now = moment().format();
    return this.firestore.collection('notes').doc(noteId).update({
      title: title,
      lastUpdatedDate: now,
    });
  }

  changeContent(noteId: string, content: string) {
    const now = moment().format();
    return this.firestore.collection('notes').doc(noteId).update({
      content: content,
      lastUpdatedDate: now,
    });
  }

  mapNotes(querySnapshot: QuerySnapshot<any>): Note[] {
    const notes = [];
    querySnapshot.forEach(function (doc) {
      const data = doc.data() as Note;
      data.id = doc.id;
      notes.push(data);
    });
    return notes;
  }
}
