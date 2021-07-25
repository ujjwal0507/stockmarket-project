export interface Exchange{
  id?: number;
  name: string;
  brief: string;
  address: {
      id?: number,
      street: string,
      city: string,
      country: string,
      zip: number
  };
  remark: string;
}
