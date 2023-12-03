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
  id: number;
  deliveryDate: string;
  //address: string;
  total: number;
  status: OrderStatus;
  createdAt: string;
  // cart: Item[];
}
