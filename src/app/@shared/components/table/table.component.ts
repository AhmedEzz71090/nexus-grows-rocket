import { Component, Input, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() cols: any[] = [];
  @Input() filterCols: any[] = [];
  @Input() cid: string = '';
  fileName = '';
  ngOnInit(): void {
    this.fileName = this.cid.substring(1);
  }

  clear(table: Table) {
    table.clear();
  }
}
