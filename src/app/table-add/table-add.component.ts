
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Table } from '../core/model/table';

@Component({
  selector: 'app-table-add',
  templateUrl: './table-add.component.html',
  styleUrls: ['./table-add.component.css']
})
export class TableAddComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Table,
    public dialogRef: MatDialogRef<TableAddComponent>,
   ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit() {
  }

}
