import { Injectable } from '@angular/core';
import { Table } from '../core/model/table';
import { Observable, of } from 'rxjs';
import { TABLES } from '../mock/mock-dish';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  tables = TABLES

  constructor() { }
  getTables():Observable<Table[]>{
    return of(this.tables)
  }

  save(table:Table){
    table.id = Math.random().toString()
    this.tables.push(table)
  }

  update(table:Table){
    let index = this.tables.findIndex(it => it.id == table.id)
    this.tables[index] = table
  }

}
