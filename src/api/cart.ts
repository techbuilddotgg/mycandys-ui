import { Cart } from '@/models/cart';
import axios, { AxiosResponse } from 'axios';
import { APIRoute } from '@/api/routes';

export const getCartByUserId = async (userId: string) => {
  const { data } = (await axios.get(`${APIRoute.CART}/${userId}`)) as AxiosResponse<Cart>;
  return data;
};

export const addItemsToCart = async (userId: string, productId: string) => {
  const { data } = (await axios.post(`${APIRoute.CART}/${userId}/${productId}`)) as AxiosResponse<Cart>;
  return data;
};

export const removeItemsFromCart = async (userId: string, productId: string) => {
  const { data } = (await axios.delete(`${APIRoute.CART}/${userId}/${productId}`)) as AxiosResponse<Cart>;
  return data;
};

export const clearCart = async (userId: string) => {
  const { data } = (await axios.delete(`${APIRoute.CART}/${userId}`)) as AxiosResponse<Cart>;
  return data;
};
