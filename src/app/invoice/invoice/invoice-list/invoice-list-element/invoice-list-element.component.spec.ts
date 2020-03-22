import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListElementComponent } from './invoice-list-element.component';

describe('InvoiceListElementComponent', () => {
  let component: InvoiceListElementComponent;
  let fixture: ComponentFixture<InvoiceListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
