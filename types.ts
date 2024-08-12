
export interface ExpenseType {
  id?: string,
  date: string,
  category: string,
  description: string,
  amount: number,
}

export interface CategoryType {
  id: string,
  name: string,
}