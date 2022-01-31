import { Component, OnInit } from '@angular/core';
import { ITag } from '../models/tag';
import { NotesService } from '../services/notes.service';
import { TagsService } from '../services/tags.service';
import { CoreService } from '../services/core.service';
import { ePropertiesNames } from '../models/ePropertiesNames';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
  favTags: ITag[] = [];
  otherTags: ITag[] = [];

  constructor(private coreService: CoreService, private notesService: NotesService, private tagsService: TagsService) { }

  ngOnInit(): void {
    this.tagsService.TagsBS.subscribe(data => this.favTags = data.filter(t => t.IsFavourite));
    this.tagsService.TagsBS.subscribe(data => this.otherTags = data.filter(t => !t.IsFavourite));
    this.coreService.sortByProperty(this.otherTags, ePropertiesNames.Name);
  }

  addNewTag() {

  }

}
