interface Discount {
  id: string;
  name: string;
  discountRate: number;
}

interface GetMerchantInfoResponse {
  minimumOrderPrice: number;
  merchantName: string;
  items: Item[];
  discounts: Discount[];
}

interface Item {
  id: string;
  name: string;
  price: number;
}

interface ItemsByCategories {
  [cetegoryName: string]: Item[];
}
