import { Cart, Item } from '@/models/cart';
import { User } from '@/models/user';

export const SHIPPING_COST = 5;

export enum OrderStatus {
  Pending = 'pending',
  Delivered = 'delivered',
  Shipped = 'shipped',
}

export const OrderStatusLabels = {
  [OrderStatus.Pending]: 'Pending',
  [OrderStatus.Delivered]: 'Delivered',
  [OrderStatus.Shipped]: 'Shipped',
};

export const formatOrderStatus = (status: OrderStatus) => {
  return OrderStatusLabels[status] || status;
};

export interface Order {
  id: string;
  deliveryDate: string;
  address: string;
  cost: number;
  status: OrderStatus;
  createdAt: string;
  cart: Item[];
}

export interface CreateOrderData {
  address: string;
  city: string;
  country: string;
  postalCode: string;
  items: {
    category: string;
    description: string;
    id: string;
    imgUrl: string;
    name: string;
    price: number;
  }[];
  userId: string;
  cartId: string;
  cost: number;
}

export const createOrderData = (
  user: User,
  cart: Cart,
  cartId: string,
): CreateOrderData => {
  return {
    address: user.address,
    city: user.city,
    country: user.country,
    postalCode: user.postalCode,
    cost: cart.fullPrice + SHIPPING_COST,
    items: cart.items.map((item) => ({
      category: item.category,
      description: '',
      id: item.productId,
      imgUrl: item.imgUrl,
      name: item.name,
      price: item.price,
    })),
    userId: user.id,
    cartId: cartId,
  };
};
