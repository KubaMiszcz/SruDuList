import { Injectable } from '@angular/core';
import { INote } from '../models/note';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  Notes: INote[] = [];
  NotesBS = new BehaviorSubject<INote[]>([]);

  constructor() { }

  AddNote(note: any) {
    this.Notes.push(note);
    this.NotesBS.next(this.Notes);
  }
}
