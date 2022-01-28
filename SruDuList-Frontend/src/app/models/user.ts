import { ITasksList } from "./task-list";

export interface IUser {
  id:number;
  userName:string;
  fullName:string;
  notesLists?: ITasksList[];
}

export const INITIAL_USER:IUser={
  id:0,
  userName:'MrTrololousername',
  fullName:'MrTrololo',
}
