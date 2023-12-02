import { useQuery, UseQueryOptions } from 'react-query';
import { getProducts } from '@/api/products';

const PRODUCTS_QUERY_KEY = 'products';
export const useProducts = (opts?: UseQueryOptions) => {
  return useQuery({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: getProducts,
    ...opts,
  });
};
