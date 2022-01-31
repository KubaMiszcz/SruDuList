import { INITIAL_USER, IUser } from './user';

export interface ITag {
  name: string;
  author: IUser;
  icon?:string;
  isFavourite?: boolean;
  isPinned?:number;
  orderNumber?:number;
}

export class Tag implements ITag {
  name: string;
  author: IUser;
  icon?: string;
  isFavourite?: boolean;
  isPinned?: number;
  orderNumber?: number;
}

export const DEFAULT_TAGS: ITag[] = [
  {
    name: 'miasto',
    author: INITIAL_USER,
  },
  {
    name: 'unimet',
    author: INITIAL_USER,
  },
  {
    name: 'allegro',
    author: INITIAL_USER,
  },
  {
    name: 'druk3d',
    author: INITIAL_USER,
  },
  {
    name: 'elektro',
    author: INITIAL_USER,
  }
];
