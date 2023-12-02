import { Product } from '@/models/product';

export interface Cart {
  id: string;
  userId: string;
  products: Product[];
}
