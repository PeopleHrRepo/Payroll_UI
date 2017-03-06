export interface Delivery {
  deliveryType:string;
  attention?: string;
  address1: string;
  address2?: string;
  country:string;
  city:string;
  state:string;
  zip: string;
  instructions?: string;
}
