import { Cart } from '@/models/cart';
import { AxiosResponse } from 'axios';
import { APIRoute } from '@/api/routes';
import { api } from '@/api/axios';

export const getCart = async (cartId: string) => {
  const { data } = (await api.get(
    `${APIRoute.CARTS}/${cartId}`,
  )) as AxiosResponse<Cart>;
  return data;
};

export const addItemsToCart = async (cartId: string, productId: string) => {
  const { data } = (await api.post(
    `${APIRoute.CARTS}/${cartId}/products/${productId}`,
  )) as AxiosResponse<Cart>;
  return data;
};

export const removeItemsFromCart = async (
  cartId: string,
  productId: string,
) => {
  const { data } = (await api.put(
    `${APIRoute.CARTS}/${cartId}/delete/products/${productId}`,
  )) as AxiosResponse<Cart>;
  return data;
};

export const clearCart = async (cartId: string) => {
  const { data } = (await api.put(
    `${APIRoute.CARTS}/${cartId}/clear`,
  )) as AxiosResponse<Cart>;
  return data;
};

export const updateProductQuantity = async (
  cartId: string,
  productId: string,
  quantity: number,
) => {
  const { data } = (await api.put(
    `${APIRoute.CARTS}/${cartId}/products/${productId}`,
    {
      quantity,
    },
  )) as AxiosResponse<Cart>;
  return data;
};
