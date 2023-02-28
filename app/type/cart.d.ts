interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

interface Cart {
  items: CartItem[];
  totalDiscountRate: number;
}
