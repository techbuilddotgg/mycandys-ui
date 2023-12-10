import { CreateOrderData, Order, OrderStatus } from '@/models/order';
import { api } from '@/api/axios';
import { APIRoute } from '@/api/routes';
import { AxiosResponse } from 'axios';

export const createOrder = async (body: CreateOrderData) => {
  const { data } = (await api.post(
    `${APIRoute.ORDERS}`,
    body,
  )) as AxiosResponse<Order>;
  return data;
};

export const getOrdersByUser = async () => {
  const { data } = (await api.get(`${APIRoute.ORDERS}/me`)) as AxiosResponse<
    Order[]
  >;
  return data;
};

export const getOrdersByUserAndStatus = async (status: OrderStatus) => {
  const { data } = (await api.get(
    `${APIRoute.ORDERS}/me/status/${status}`,
  )) as AxiosResponse<Order[]>;
  return data;
};

export const ORDER_BY_ID_QUERY_KEY = 'orderById';
export const getOrderById = async (orderId: string) => {
  const { data } = (await api.get(
    `${APIRoute.ORDERS}/${orderId}`,
  )) as AxiosResponse<Order>;
  return data;
};
