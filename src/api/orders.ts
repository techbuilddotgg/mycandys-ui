import { CreateOrderData, Order } from '@/models/order';
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

export const getOrdersByUserId = async (userId: string) => {
  const { data } = (await api.get(
    `${APIRoute.ORDERS}/user/${userId}`,
  )) as AxiosResponse<Order[]>;
  return data;
};

// TODO: getOrdersByUserIdAndStatus on backend
export const getOrdersByUserIdAndStatus = async (
  userId: string,
  status: string,
) => {
  const { data } = (await api.get(
    `${APIRoute.ORDERS}/user/${userId}/${status}`,
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
