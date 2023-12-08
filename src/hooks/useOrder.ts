import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { CreateOrderData, Order } from '@/models/order';
import { AxiosError } from 'axios';
import { createOrder } from '@/api/orders';

const ORDER_MUTATION_KEY = 'orderMutationKey';

export const useCreateOrder = (
  opts?: UseMutationOptions<
    Order,
    AxiosError,
    {
      order: CreateOrderData;
    },
    unknown
  >,
) => {
  return useMutation({
    mutationKey: [ORDER_MUTATION_KEY],
    mutationFn: ({ order }) => createOrder(order),
    ...opts,
  });
};
