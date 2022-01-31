import { Component, OnInit, Input } from '@angular/core';
import { ITag } from '../models/tag';
import { NotesService } from '../services/notes.service';
import { TagsService } from '../services/tags.service';

@Component({
  selector: 'app-tag-tile',
  templateUrl: './tag-tile.component.html',
  styleUrls: ['./tag-tile.component.scss']
})
export class TagTileComponent implements OnInit {
  @Input() Tag: ITag;

  constructor(private notesService: NotesService, private tagsService: TagsService) { }

  ngOnInit(): void {
  }

  filterByTag() {
    this.notesService.filterNotesByTag(this.Tag);
  }

}
