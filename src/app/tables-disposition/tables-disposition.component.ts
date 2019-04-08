import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
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

  constructor(
    public dialog: MatDialog,
    private tableService: TableService
  ) { }

  ngOnInit() {
  }

  onDragEnded(event) {
    let element = event.source.getRootElement();
    let boundingClientRect = element.getBoundingClientRect();
    let parentPosition = this.getPosition(element);
    console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));        
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

  openDialog(): void {
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
