import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountComponent} from './account/account.component';
import {AccountDetailsComponent} from './account/account-details/account-details.component';
import {BudgetComponent} from './budget/budget/budget.component';
import {DashboardComponent} from './budget/dashboard/dashboard.component';
import {InvoiceComponent} from './invoice/invoice/invoice.component';
import {InvoiceAddComponent} from './invoice/invoice/invoice-add/invoice-add.component';
import {InvoiceListComponent} from './invoice/invoice/invoice-list/invoice-list.component';


const routes: Routes = [
  {
    path: 'invoice', component: InvoiceComponent,
    children: [{
      path: 'add', component: InvoiceAddComponent
    },
      {
        path: 'list', component: InvoiceListComponent
      }]
  },
  {path: 'account', component: AccountComponent},
  {path: 'account/:id', component: AccountDetailsComponent},
  {path: 'budget', component: BudgetComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
