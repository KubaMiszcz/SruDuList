import { ITag } from './tag';

export class INote {
  Content: string;
  Details: string;
  Tags: ITag[];

}

export class Note implements INote {
  Content: string;
  Details: string;
  Tags: ITag[];
}

export const DEFAULTNOTES: INote[] = [
  {
    Content: 'asdasdsad',
    Details: 'deeeeet',
    Tags: null
  }
];
