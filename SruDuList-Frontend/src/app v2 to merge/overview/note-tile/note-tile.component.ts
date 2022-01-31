import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/models/task';

@Component({
  selector: 'app-note-tile',
  templateUrl: './note-tile.component.html',
  styleUrls: ['./note-tile.component.scss']
})
export class NoteTileComponent implements OnInit {
  @Input() Note: ITask;

  constructor() { }

  ngOnInit(): void {
  }

}
