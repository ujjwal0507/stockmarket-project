import { Stock } from "./Stock";

export interface StockPrice{
  id: number;
  stock: Stock;
  price: number;
  timestamp: string;
}
