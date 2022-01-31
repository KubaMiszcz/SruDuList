import { Component, OnInit } from '@angular/core';
import { ITask, Note } from '../models/task';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  Notes: ITask[] = [];

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.NotesBS.subscribe(data => this.Notes = data);
  }

}
