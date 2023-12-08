import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { Cart } from '@/models/cart';
import {
  addItemsToCart,
  clearCart,
  getCart,
  removeItemsFromCart,
  updateProductQuantity,
} from '@/api/cart';
import { AxiosError } from 'axios';

export const CART_QUERY_KEY = 'cart';
export const useCart = (
  cartId: string,
  opts?: UseQueryOptions<Cart, AxiosError, Cart>,
) => {
  return useQuery({
    queryKey: [CART_QUERY_KEY, cartId],
    queryFn: () => getCart(cartId),
    ...opts,
  });
};

const ADD_TO_CART_MUTATION_KEY = 'add-to-cart';
export const useAddToCart = (
  opts?: UseMutationOptions<
    {},
    AxiosError,
    {
      cartId: string;
      productId: string;
    }
  >,
) => {
  return useMutation({
    mutationKey: [ADD_TO_CART_MUTATION_KEY],
    mutationFn: ({ productId, cartId }) => addItemsToCart(cartId, productId),
    ...opts,
  });
};

const REMOVE_FROM_CART_MUTATION_KEY = 'remove-from-cart';
export const useRemoveFromCart = (
  cartId: string,
  productId: string,
  opts?: UseMutationOptions<
    {},
    AxiosError,
    {
      cartId: string;
      productId: string;
    }
  >,
) => {
  return useMutation({
    mutationKey: [REMOVE_FROM_CART_MUTATION_KEY, cartId, productId],
    mutationFn: ({ cartId, productId }) =>
      removeItemsFromCart(cartId, productId),
    ...opts,
  });
};

const CLEAR_CART_MUTATION_KEY = 'clear-cart';
export const useClearCart = (
  opts?: UseMutationOptions<{}, AxiosError, { cartId: string }>,
) => {
  return useMutation({
    mutationKey: [CLEAR_CART_MUTATION_KEY],
    mutationFn: ({ cartId }) => clearCart(cartId),
    ...opts,
  });
};

const UPDATE_PRODUCT_QUANTITY_MUTATION_KEY = 'update-product-quantity';
export const useUpdateProductQuantity = (
  cartId: string,
  productId: string,
  opts?: UseMutationOptions<
    {},
    AxiosError,
    {
      cartId: string;
      productId: string;
      quantity: number;
    }
  >,
) => {
  return useMutation({
    mutationKey: [UPDATE_PRODUCT_QUANTITY_MUTATION_KEY, cartId, productId],
    mutationFn: ({ productId, cartId, quantity }) =>
      updateProductQuantity(cartId, productId, quantity),
    ...opts,
  });
};
