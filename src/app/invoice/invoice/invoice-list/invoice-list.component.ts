import {Component, OnInit} from '@angular/core';
import {InvoiceService} from '../../invoice.service';
import {Invoice} from '../../invoice';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[];

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit(): void {
  }

  update() {
    this.updateData();
  }

  private updateData() {
    this.invoiceService.getInvoices().subscribe(data => {
      this.invoices = data;
    });
  }
}
