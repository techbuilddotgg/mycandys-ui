import axios, { AxiosResponse } from 'axios';
import { APIRoute } from '@/api/routes';
import { Product } from '@/models/product';

export const getProducts = async () => {
  const { data } = (await axios.get(`${APIRoute.PRODUCTS}`)) as AxiosResponse<Product[]>;
  return data;
};
