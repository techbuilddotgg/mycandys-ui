import { Cart, Item } from '@/models/cart';
import { User } from '@/models/user';

export const SHIPPING_COST = 5;

export enum OrderStatus {
  All = 'all',
  Pending = 'pending',
  Shipped = 'shipped',
  Delivered = 'delivered',
}

export const OrderStatusLabels = {
  [OrderStatus.Pending]: 'Pending',
  [OrderStatus.Delivered]: 'Delivered',
  [OrderStatus.Shipped]: 'Shipped',
  [OrderStatus.All]: 'All',
};

export const OrderStatusColors = {
  [OrderStatus.Pending]: 'bg-yellow-400 hover:bg-yellow-500',
  [OrderStatus.Delivered]: 'bg-green-400 hover:bg-green-500',
  [OrderStatus.Shipped]: 'bg-blue-400 hover:bg-blue-500',
  [OrderStatus.All]: 'bg-primary hover:bg-primary-dark',
};

export const getOrderStatusColor = (status: OrderStatus) => {
  return OrderStatusColors[status] || 'bg-primary hover:bg-primary-dark';
};

export const getOrderStatusLabel = (status: OrderStatus) => {
  return OrderStatusLabels[status] || status;
};

export interface Order {
  id: string;
  deliveredAt: string;
  address: string;
  cost: number;
  status: OrderStatus;
  createdAt: string;
  items: Item[];
  expectedDeliveryDate: string;
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
      quantity: item.quantity,
    })),
    userId: user.id,
    cartId: cartId,
  };
};
