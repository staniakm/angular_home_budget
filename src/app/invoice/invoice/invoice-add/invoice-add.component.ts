import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IShop, ShopItem} from '../../../shop/shop';
import {forkJoin, Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../../account/account.service';
import {ShopService} from '../../../shop/shop.service';
import {map, startWith} from 'rxjs/operators';
import {NewInvoice} from '../../invoice';

@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.scss']
})
export class InvoiceAddComponent implements OnInit {


  @ViewChild('product') productElem: ElementRef;

  newInvoiceCreated = false;
  shopId: number;

  shops: IShop[];
  accounts: Account[];

  // store invoice data
  products = [];
  invoice: NewInvoice;

  invoiceForm = this.newInvoiceForm();
  invoiceProductsForm = this.newProductForm();

  shopItems: Observable<ShopItem[]>;
  allOptions: ShopItem[] = [];


  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private shopService: ShopService) {
  }

  ngOnInit(): void {
    forkJoin({
        shops: this.shopService.fetchAll(),
        accounts: this.accountService.fetchAllAccounts()
      }
    ).subscribe(result => {
      this.shops = result.shops;
      this.accounts = result.accounts;
    });
    this.shopItems = this.invoiceProductsForm.get('product').valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.allOptions.slice())
      );
  }

  newInvoiceForm() {
    return new FormGroup({
      shopId: new FormControl({value: '', disabled: false}, Validators.required),
      account: new FormControl({value: '', disabled: false}, Validators.required),
      date: new FormControl(new Date(), Validators.required),
      invoiceNumber: new FormControl('')
    });
  }

  newProductForm() {
    return new FormGroup({
      product: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      discount: new FormControl('')
    });
  }

  displayName(item: ShopItem): string {
    return item && item.name ? item.name : '';
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();

    return this.allOptions.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  saveBaseInvoiceData() {

    const date: Date = this.invoiceForm.value.date;
    const invoiceDate = new Date(date.getFullYear(), date.getMonth(), date.getDay());
    this.shopId = this.invoiceForm.value.shopId;
    this.shopService.fetchAllShopItems(this.shopId)
      .subscribe(data => {
        console.log('Items', data);
        this.allOptions = data;
      });
    this.invoice = new NewInvoice(this.shopId, this.invoiceForm.value.account, date, this.invoiceForm.value.invoiceNumber);
    this.invoiceForm.controls.shopId.disable();
    this.invoiceForm.controls.account.disable();
    this.invoiceForm.controls.date.disable();
  }

  addProduct() {
    if (!this.invoiceProductsForm.valid) {
      return;
    }
    const product = this.invoiceProductsForm.value.product;
    if (product !== null && typeof product === 'object') {
      console.log('is Object', product);
    } else if (product !== null && typeof product === 'string' && product !== '') {
      console.log('is string', product);

    }
    console.log();
    this.products.push(this.invoiceProductsForm.value);
    this.invoiceProductsForm = this.newProductForm();
    this.shopItems = this.invoiceProductsForm.get('product').valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.allOptions.slice())
      );
    this.productElem.nativeElement.focus();
  }


  cancelInvoice() {
    console.log('cancel invoice');
    this.newInvoiceCreated = false;
    this.invoiceForm.controls.shopId.enable();
    this.invoiceForm.controls.account.enable();
    this.invoiceForm.controls.date.enable();
    this.invoiceForm = this.newInvoiceForm();
    this.allOptions = [];
  }

  saveInvoice() {
    console.log(this.invoice, this.products);
    // this.cancelInvoice();
  }
}
