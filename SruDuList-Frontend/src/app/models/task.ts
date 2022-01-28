import { INITIAL_USER, IUser } from './user';
import { ITag } from "./tag";

export interface ITask {
  name: string;
  description?: string;
  author:IUser;
  tags?: ITag[];
  isCompleted?:boolean;
  isFavourite?: boolean;
  isPinned?:number;
  orderNumber?:number;
  dueDate?: Date;
  subTasks?:ITask[];
  priority?:number;
  isToday?:boolean;
  // isPinned:boolean;
  // hasReminder:boolean;
}







// export class Note implements INote {
//   content: string;
//   description: string;
//   tags: ITag[];
// }

export const INITIAL_NOTES: ITask[] = [
  {
    name: 'task1',
    author: INITIAL_USER,
  },
  {
    name: 'task2',
    author: INITIAL_USER,
  },
  {
    name: 'task3',
    author: INITIAL_USER,
  }
];
