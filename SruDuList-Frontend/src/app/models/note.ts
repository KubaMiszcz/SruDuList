import { ITag } from './tag';

export class INote {
  Content: string;
  Details: string;
  Tags: ITag[];
  OrderNo: number;
  // Color: string;
}

export class Note implements INote {
  Content: string;
  Details: string;
  Tags: ITag[];
  OrderNo: number;
}

export const DEFAULTNOTES: INote[] = [
  {
    Content: 'asda11111sdsad',
    Details: 'deeeeet',
    Tags: [
      {
        Name: 'miasto',
        IsFavourite: true,
        OrderNo: 0
      },
      {
        Name: 'unimet',
        IsFavourite: true,
        OrderNo: 1
      }
    ],
    OrderNo: 1
  },
  {
    Content: 'asda22222sdsad',
    Details: 'deeeeet',
    Tags: [
      {
        Name: 'druk3d',
        IsFavourite: false,
        OrderNo: 3
      },
      {
        Name: 'elektro',
        IsFavourite: false,
        OrderNo: 4
      }
    ],
    OrderNo: 2
  }
];
