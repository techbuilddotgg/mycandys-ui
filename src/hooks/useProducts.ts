import { getProductCategories, getProducts, getSearchProducts } from '@/api/products';
import { Product } from '@/models/product';
import { AxiosError } from 'axios';
import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';

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

export const SEARCH_PRODUCTS_QUERY_KEY = 'search';
export const useSearchProducts = (
  query: string,
  opts?: UseQueryOptions<Product[], AxiosError, Product[], [typeof  SEARCH_PRODUCTS_QUERY_KEY, string]>,
) => {
  return useQuery({
    queryKey: [SEARCH_PRODUCTS_QUERY_KEY, query],
    queryFn: () => getSearchProducts(query),
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
