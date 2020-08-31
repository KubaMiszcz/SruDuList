import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ITag, DefaultTags as DEFAULTTAGS } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  Tags: ITag[] = [];
  TagsBS = new BehaviorSubject<ITag[]>([]);

  constructor() {
    this.Tags = DEFAULTTAGS;
    this.TagsBS.next(this.Tags);
  }
}
