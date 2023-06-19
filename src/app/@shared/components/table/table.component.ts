import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Table } from 'primeng/table';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() cols: any[] = [];
  @Input() filterCols: any[] = [];
  @Input() actions: any = [];
  @Input() cid: string = '';
  @Output() actionsBtnClicked = new EventEmitter();
  fileName = '';
  ngOnInit(): void {
    this.fileName = this.cid.substring(1);
  }

  clear(table: Table) {
    table.clear();
  }
  onActionsBtnClick(row: any) {
    this.actionsBtnClicked.emit(row);
  }
}
