import { Company } from "./Company";
import { Exchange } from "./Exchange";

export interface Stock{
  id: number;
  company: Company;
  exchange: Exchange;
  stockCode: string;
}
