export class ITag {
  Name: string;
  IsFavourite: boolean;
}

export class Tag implements ITag {
  Name: string;
  IsFavourite: boolean;
}

export const DefaultTags: ITag[] = [
  {
    Name: 'miasto',
    IsFavourite: true
  },
  {
    Name: 'unimet',
    IsFavourite: true
  },
  {
    Name: 'leroy',
    IsFavourite: false
  },
  {
    Name: 'druk3d',
    IsFavourite: false
  },
  {
    Name: 'elektro',
    IsFavourite: false
  }
];
