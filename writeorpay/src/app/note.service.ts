import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Note from './models/note';

@Injectable()
export class NoteService {

  constructor(private firestore: AngularFirestore) { }

  getNotes() {
    return this.firestore.collection('notes').get();
  }

  createNote(note: Note): Promise<void> {
    return this.firestore.collection('notes').doc(note.id).set({
      title: '',
      content: ''
    });
  }

  mapNotes(querySnapshot: QuerySnapshot<any>): Note[] {

    const notes = [];
    querySnapshot.forEach(function (doc) {
      const data = doc.data() as Note;
      // console.log(doc.id, " => ", doc.data());
      data.id = doc.id;
      notes.push(data);

    });
    return notes;
  }


}
