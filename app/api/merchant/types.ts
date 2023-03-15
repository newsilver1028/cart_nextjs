export interface Discount {
  id?: string;
  name: string;
  discountRate: number;
}

export interface Category {
  categoryId: string;
  categoryName: string;
  items: Item[];
}

export interface GetMerchantInfo {
  minimumOrderPrice: number;
  merchantName: string;
  categories: Category;
  discounts: Discount[];
}

export interface Item {
  id?: string;
  name: string;
  price: number;
}
