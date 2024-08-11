
export interface ExpenseType {
  date: Date,
  category: string,
  description: string,
  amount: number,
}

export interface CategoryType {
  id: string,
  name: string,
}