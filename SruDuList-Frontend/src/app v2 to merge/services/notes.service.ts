import { Injectable } from '@angular/core';
import { ITask } from '../models/task';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  Notes: ITask[] = [];
  NotesBS = new BehaviorSubject<ITask[]>([]);

  constructor() { }

  AddNote(note: any) {
    this.Notes.push(note);
    this.NotesBS.next(this.Notes);
  }
}
