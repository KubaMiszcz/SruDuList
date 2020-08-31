import { Component, OnInit } from '@angular/core';
import { INote, Note } from 'src/app/models/note';
import { ITag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags.service';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  note: INote = new Note();
  content: string;
  details: string;
  tags: ITag[] = [];
  favTags: ITag[] = [];

  constructor(private tagService: TagsService, private notesService: NotesService) { }

  ngOnInit(): void {
    this.favTags = this.tagService.Tags.filter(t => t.IsFavourite);
    this.tags = this.tagService.Tags.filter(t => !t.IsFavourite);
  }

  addNote() {
    this.notesService.AddNote(this.note);
  }

}
