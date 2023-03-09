export interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

export interface Cart {
  items: CartItem[];
  totalDiscountedPrice: number;
  totalPrice: number;
}
