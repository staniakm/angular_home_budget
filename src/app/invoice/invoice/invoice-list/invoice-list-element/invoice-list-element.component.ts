import {Component, Input, OnInit} from '@angular/core';
import {Invoice, InvoiceDetails} from '../../../invoice';
import {InvoiceService} from '../../../invoice.service';

@Component({
  selector: 'app-invoice-list-element',
  templateUrl: './invoice-list-element.component.html',
  styleUrls: ['./invoice-list-element.component.scss']
})
export class InvoiceListElementComponent implements OnInit {

  @Input() invoice: Invoice;

  showDetails = false;

  invoiceDetails: InvoiceDetails[];

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit(): void {
  }

  details(listId: number) {
    this.showDetails = !this.showDetails;

    if (this.showDetails) {
      this.invoiceService.getInvoiceDetails(listId)
        .subscribe(data => {
            this.invoiceDetails = data;

          }
        );
    }
  }
}
