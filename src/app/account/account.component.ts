import {Component, OnInit} from '@angular/core';
import {AccountService} from './account.service';
import {month} from '../variables';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styles: [`
    h2 { text-align: center
    }
  `]
})
export class AccountComponent implements OnInit {

  public accounts;
  month = new Date();

  constructor(private accountService: AccountService) {
  }


  ngOnInit(): void {
    this.getAccountData();

  }

  previousMonth() {
    this.accountService.previousMonth();
    this.getAccountData();
  }


  nextMonth() {
    this.accountService.nextMonth();
    this.getAccountData();
  }

  getAccountData() {
    this.accountService.getAccountData().subscribe(data => {
      this.accounts = data;
    });
    const date = new Date();
    date.setMonth(date.getMonth() + month);
    this.month = date;
  }

  update = () => {
    this.getAccountData();
  }
}
