import { ITask } from "./task";

export interface ITasksList {
  name: string;
  description?: string;
  author?: string;
  notes: ITask[];
  icon?: string;
  isFavourite?: boolean;
  isPinned?: number;
  orderNumber?: number;
  showDescriptions?: boolean;
}

/**
 smartLists:
all
 today
tomorrow
next 7 days

 */

export const DEFAULT_LISTS: ITasksList[] = [
  {
    name: 'Today',
    notes: [],
    isFavourite: true
  },
  {
    name: 'na miescie',
    notes: [],
  },
  {
    name: 'w domu',
    notes: [],
  },
];

