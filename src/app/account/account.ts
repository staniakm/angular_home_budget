export interface AccountSummary {


  id: number;
  name: string;
  moneyAmount: number;
  expense: number;
  income: number;
}

export interface Account {
  id: number;
  name: string;
  amount: number;
  owner: string;
}

