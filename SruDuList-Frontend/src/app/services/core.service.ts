import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }

  sortByProperty<T>(array: T[], propName: string): T[] {
    array.sort((a, b) => a[propName] > b[propName] ? 1 : -1);
  }

}
