import _ from 'lodash';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class HelperService {

  removeFromArrayByProp<T>(array: T[], propName: string, value: any): T[] {
    const list = _.reject(array, { [propName]: value }) as T[];

    return list;
  }

}