import { AxiosResponse } from 'axios';
import { APIRoute } from '@/api/routes';
import { Product } from '@/models/product';
import { api } from '@/api/axios';

export const getProducts = async (): Promise<Product[]> => {
  const { data } = (await api.get(`${APIRoute.PRODUCTS}`)) as AxiosResponse<
    Product[]
  >;
  return data;
};

export const getProductCategories = async () => {
  const { data } = (await api.get(
    `${APIRoute.PRODUCTS}/categories`,
  )) as AxiosResponse<string[]>;

  return data;
};

export const getSearchProducts = async (query: string) => {
  const { data } = (await api.get(
    `${APIRoute.PRODUCTS}/search?name=${query}`,
  )) as AxiosResponse<Product[]>;
  return data;
};

export const getProductsByCategory = async (category: string) => {
  const { data } = (await api.get(
    `${APIRoute.PRODUCTS}/category/${category}`,
  )) as AxiosResponse<Product[]>;
  return data;
};
