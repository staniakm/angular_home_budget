import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


interface Option {
  id: number;
  name: string;
}


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  addInvoice() {
    this.router.navigate(['/invoice/add']);
  }
}
