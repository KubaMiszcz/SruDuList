import { Component, OnInit, Input } from '@angular/core';
import { INote } from 'src/app/models/note';

@Component({
  selector: 'app-note-tile',
  templateUrl: './note-tile.component.html',
  styleUrls: ['./note-tile.component.scss']
})
export class NoteTileComponent implements OnInit {
  @Input() Note: INote;

  constructor() { }

  ngOnInit(): void {
  }

}
