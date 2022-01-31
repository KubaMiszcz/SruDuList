export class ITag {
  Name: string;
  IsFavourite: boolean;
  OrderNo: number;
}

export class Tag implements ITag {
  Name: string;
  IsFavourite: boolean;
  OrderNo: number;
}

export const DefaultTags: ITag[] = [
  {
    Name: 'miasto',
    IsFavourite: true,
    OrderNo: 0
  },
  {
    Name: 'unimet',
    IsFavourite: true,
    OrderNo: 1
  },
  {
    Name: 'leroy',
    IsFavourite: false,
    OrderNo: 2
  },
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
];
