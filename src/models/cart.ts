export interface Item {
  productId: string;
  name: string;
  imgUrl: string;
  price: number;
  quantity: number;
}

export interface Cart {
  _id: string;
  fullPrice: number;
  items: Item[];
}
