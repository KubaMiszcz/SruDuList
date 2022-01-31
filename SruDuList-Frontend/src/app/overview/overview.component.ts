import { Component, OnInit } from '@angular/core';
import { INote, Note } from '../models/note';
import { NotesService } from '../services/notes.service';
import { ITag } from '../models/tag';
import { TagsService } from '../services/tags.service';
import { CoreService } from '../services/core.service';
import { ePropertiesNames } from '../models/ePropertiesNames';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  Notes: INote[] = [];
  Tags: ITag[] = [];

  constructor(private coreService: CoreService, private notesService: NotesService, private tagsService: TagsService) { }

  ngOnInit(): void {
    this.notesService.NotesBS.subscribe(data => this.Notes = this.coreService.sortByProperty(data, ePropertiesNames.OrderNo));
    this.tagsService.TagsBS.subscribe(data => this.Tags = data);
  }

  addNewNote() {

  }

}
