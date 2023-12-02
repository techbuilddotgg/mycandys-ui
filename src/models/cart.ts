export interface Item {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  quantity: number;
}

export interface Cart {
  id: string;
  userId: string;
  products: Item[];
}
