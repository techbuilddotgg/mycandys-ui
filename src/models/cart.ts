export interface Item {
  productId: string;
  name: string;
  imgUrl: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
}

export interface Cart {
  _id: string;
  fullPrice: number;
  items: Item[];
}
