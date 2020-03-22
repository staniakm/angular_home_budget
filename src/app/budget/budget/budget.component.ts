import {Component, OnInit} from '@angular/core';
import {BudgetService, IMonthBudget} from '../budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  public budget;
  public budgetItems = [];

  constructor(private budgetService: BudgetService) {
  }

  ngOnInit(): void {
    this.updateData()
  }

  update() {
    this.updateData()
  }

  private updateData() {
    this.budgetService.getBudgets().subscribe(data => {
      this.budget = data;
      this.budgetItems = data?.budgets;
    });
  }
}
