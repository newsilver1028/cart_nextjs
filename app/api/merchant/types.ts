export interface Discount {
  id?: string;
  name: string;
  discountRate: number;
}

export interface GetMerchantInfoResponse {
  minimumOrderPrice: number;
  merchantName: string;
  items: Item[];
  discounts: Discount[];
}

export interface Item {
  id?: string;
  name: string;
  price: number;
}

export interface ItemsByCategories {
  [categoryName: string]: Item[];
}
