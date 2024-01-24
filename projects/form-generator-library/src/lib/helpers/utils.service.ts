import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {
  }
}

export const getDataArray = (data: any[]): any[] => {
  return data;
}
