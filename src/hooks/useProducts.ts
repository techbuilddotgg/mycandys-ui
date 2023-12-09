import {
  getProductCategories,
  getProducts,
  getProductsByCategory,
  getSearchProducts,
} from '@/api/products';
import { Product } from '@/models/product';
import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export const PRODUCTS_QUERY_KEY = 'products';
export const useProducts = (
  opts?: Partial<UseQueryOptions<Product[], AxiosError, Product[]>>,
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
  opts?: Partial<UseQueryOptions<Product[], AxiosError, Product[]>>,
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

export const PRODUCTS_BY_CATEGORY_QUERY_KEY = 'productsByCategory';
export const useProductsByCategory = (
  category: string,
  opts?: Partial<UseQueryOptions<Product[], AxiosError, Product[]>>,
) => {
  return useQuery({
    queryKey: [PRODUCTS_BY_CATEGORY_QUERY_KEY, category],
    queryFn: () => getProductsByCategory(category),
    ...opts,
  });
};

export const useFilterProducts = (search: string, category: string) => {
  const products = useProducts({
    enabled: !search && !category,
  });
  const productsByCategory = useProductsByCategory(category, {
    enabled: !!category && !search,
  });
  const searchProducts = useSearchProducts(search, {
    enabled: !!search && !category,
  });

  if (category && !search) {
    return {
      data: productsByCategory.data,
      isLoading: productsByCategory.isLoading,
      isError: productsByCategory.isError,
    };
  }

  if (search) {
    return {
      data: searchProducts.data,
      isLoading: searchProducts.isLoading,
      isError: searchProducts.isError,
    };
  }

  return {
    data: products.data,
    isLoading: products.isLoading,
    isError: products.isError,
  };
};
