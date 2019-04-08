import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TableAddComponent } from '../table-add/table-add.component';
import { Table } from '../core/model/table';
import { TableService } from '../table.service';

@Component({
  selector: 'app-tables-disposition',
  templateUrl: './tables-disposition.component.html',
  styleUrls: ['./tables-disposition.component.css']
})
export class TablesDispositionComponent implements OnInit {
  tables: Table[]
  constructor(
    public dialog: MatDialog,
    private tableService: TableService
  ) { }

  ngOnInit() { 
    this.tableService.getTables().subscribe(tables=> this.tables =tables)
  }

  onDragEnded(table, event) {
    console.log(this.tables)
    let element = event.source.getRootElement();
    let boundingClientRect = element.getBoundingClientRect();
    let parentPosition = this.getPosition(element);
    table.x = (boundingClientRect.x - parentPosition.left)
    table.y = (boundingClientRect.y - parentPosition.top)
    table.transform = element.style.transform
    this.tableService.update(table)
    console.log(table)
  }
  

  getPosition(el) {
    let x = 0;
    let y = 0;
    while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: y, left: x };
  }

  openEditDialog(table){
    const dialogRef = this.dialog.open(TableAddComponent, {
      data: {
        table: table}
    });

    dialogRef.afterClosed().subscribe(result => {
        this.tableService.update(result)
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(TableAddComponent, {
      data: {
        table: {
          number: '',
          seats: 2
      }}
    });

    dialogRef.afterClosed().subscribe(result => {
        this.tableService.save(result)
    });
  }
}
