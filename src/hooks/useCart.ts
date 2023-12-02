import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
import { Cart } from '@/models/cart';
import { addItemsToCart, clearCart, getCartByUserId } from '@/api/cart';
import { AxiosError } from 'axios';

const CART_QUERY_KEY = 'cart';
export const useCart = (userId: string, opts?: UseQueryOptions<Cart, AxiosError, Cart>) => {
  return useQuery({
    queryKey: [CART_QUERY_KEY, userId],
    queryFn: () => getCartByUserId(userId),
    ...opts,
  });
};

const ADD_TO_CART_MUTATION_KEY = 'add-to-cart';
export const useAddToCart = (
  userId: string,
  productId: string,
  opts?: UseMutationOptions<
    {},
    AxiosError,
    {
      userId: string;
      productId: string;
    }
  >,
) => {
  return useMutation({
    mutationKey: ADD_TO_CART_MUTATION_KEY,
    mutationFn: () => addItemsToCart(userId, productId),
    ...opts,
  });
};

const REMOVE_FROM_CART_MUTATION_KEY = 'remove-from-cart';
export const useRemoveFromCart = (
  userId: string,
  productId: string,
  opts?: UseMutationOptions<
    {},
    AxiosError,
    {
      userId: string;
      productId: string;
    }
  >,
) => {
  return useMutation({
    mutationKey: REMOVE_FROM_CART_MUTATION_KEY,
    mutationFn: () => addItemsToCart(userId, productId),
    ...opts,
  });
};

const CLEAR_CART_MUTATION_KEY = 'clear-cart';
export const useClearCart = (userId: string, opts?: UseMutationOptions<{}, AxiosError, { userId: string }>) => {
  return useMutation({
    mutationKey: CLEAR_CART_MUTATION_KEY,
    mutationFn: () => clearCart(userId),
    ...opts,
  });
};
