export class NewInvoice {
  shopId: number;
  account: number;
  date: Date;
  invoiceNumber: string;

  constructor(shopId: number, account: number, date: Date, invoiceNumber: string,) {
    this.shopId = shopId;
    this.account = account;
    this.date = date;
    this.invoiceNumber = invoiceNumber;
  }
}


export class Invoice {
  listId: number;
  name: string;
  date: Date;
  price: number;
  account: string;
}

export class InvoiceDetails {
  invoiceItemId: number;
  productName: string;
  quantity: number;
  price: number;
  discount: number;
  totalPrice: number;
  itemId: number;
}
