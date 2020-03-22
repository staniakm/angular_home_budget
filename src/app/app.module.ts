import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AccountComponent } from './account/account.component';
import {HttpClientModule} from '@angular/common/http';
import { AccountTableComponent } from './account/account-table/account-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AccountDetailsComponent } from './account/account-details/account-details.component';
import { BudgetComponent } from './budget/budget/budget.component';
import { DashboardComponent } from './budget/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { BudgetTableComponent } from './budget/budget/budget-table/budget-table.component';
import { DateNavigatorComponent } from './date-navigator/date-navigator.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import { InvoiceComponent } from './invoice/invoice/invoice.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { InvoiceAddComponent } from './invoice/invoice/invoice-add/invoice-add.component';
import { InvoiceListComponent } from './invoice/invoice/invoice-list/invoice-list.component';
import { InvoiceListElementComponent } from './invoice/invoice/invoice-list/invoice-list-element/invoice-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AccountComponent,
    AccountTableComponent,
    AccountDetailsComponent,
    BudgetComponent,
    DashboardComponent,
    BudgetTableComponent,
    DateNavigatorComponent,
    InvoiceComponent,
    InvoiceAddComponent,
    InvoiceListComponent,
    InvoiceListElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
