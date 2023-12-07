import { getProductCategories, getProducts } from '@/api/products';
import { Product } from '@/models/product';
import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export const PRODUCTS_QUERY_KEY = 'products';
export const useProducts = (
  opts?: UseQueryOptions<Product[], AxiosError, Product[]>,
) => {
  return useQuery({
    queryKey: [PRODUCTS_QUERY_KEY],
    queryFn: getProducts,
    ...opts,
  });
};

export const CATEGORY_QUERY_KEY = 'categories';
export const useCategories = (
  opts?: UseQueryOptions<string[], AxiosError, string[]>,
) => {
  return useQuery({
    queryKey: [CATEGORY_QUERY_KEY],
    queryFn: getProductCategories,
    ...opts,
  });
};
