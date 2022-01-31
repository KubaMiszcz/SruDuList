import { Injectable } from '@angular/core';
import { INote, DEFAULTNOTES } from '../models/note';
import { BehaviorSubject } from 'rxjs';
import { ITag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  AllNotes: INote[] = [];
  NotesBS = new BehaviorSubject<INote[]>([]);
  currentNote: INote;

  constructor() {
    this.AllNotes = DEFAULTNOTES;
    this.NotesBS.next(this.AllNotes);
  }

  AddNote(note: any) {
    this.AllNotes.push(note);
    this.NotesBS.next(this.AllNotes);
  }

  filterNotesByTag(tag: ITag) {
    console.log('filter by ', tag.Name);

    // this.NotesBS.next(this.AllNotes.filter(n => n.Tags.includes(tag)));
  }
}
