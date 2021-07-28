import { Company } from "./Company";
import { Exchange } from "./Exchange";

export interface IPO{
  id: number;
  company: Company;
  exchange: Exchange;
  pricePerShare: number;
  totalShares: number;
  openDateTime: string;
  remarks: string;
}
