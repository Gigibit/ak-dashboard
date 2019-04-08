import { Injectable } from '@angular/core';
import { Table } from './core/model/table';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }
  getTables():Observable<Table[]>{
    return null
  }

  save(table:Table){

  }

  update(table:Table){

  }

}
