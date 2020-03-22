import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {AccountSummary} from '../account';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-table',
  templateUrl: './account-table.component.html',
  styleUrls: ['./account-table.component.scss']
})
export class AccountTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<AccountSummary>;

  @Input() public myDataArray;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'moneyAmount', 'income', 'expense'];

  constructor(private router: Router) {
  }

  clickRow(id: number) {
    console.log('clicked', id);
    this.router.navigate(['account', id]);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
}
