import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { CreateOrderData, Order, OrderStatus } from '@/models/order';
import { AxiosError } from 'axios';
import {
  createOrder,
  getOrdersByUser,
  getOrdersByUserAndStatus,
} from '@/api/orders';

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

export const USER_ORDERS_QUERY_KEY = 'user_orders';
export const useOrdersByUser = (
  opts?: Partial<
    UseQueryOptions<
      Order[],
      AxiosError,
      Order[],
      [typeof USER_ORDERS_QUERY_KEY]
    >
  >,
) => {
  return useQuery({
    queryKey: [USER_ORDERS_QUERY_KEY],
    queryFn: getOrdersByUser,
    ...opts,
  });
};

export const USER_ORDERS_BY_STATUS_QUERY_KEY = 'user_orders_by_status';
export const useOrdersByUserAndStatus = (
  status: OrderStatus,
  opts?: Partial<
    UseQueryOptions<
      Order[],
      AxiosError,
      Order[],
      [typeof USER_ORDERS_BY_STATUS_QUERY_KEY, OrderStatus]
    >
  >,
) => {
  return useQuery({
    queryKey: [USER_ORDERS_BY_STATUS_QUERY_KEY, status],
    queryFn: () => getOrdersByUserAndStatus(status),
    ...opts,
  });
};

export const useFilterOrders = (status: OrderStatus | null) => {
  const orders = useOrdersByUser({
    enabled: !status || status === OrderStatus.All,
  });

  const ordersByStatus = useOrdersByUserAndStatus(
    status ? status : OrderStatus.Pending,
    {
      enabled: !!status && status !== OrderStatus.All,
    },
  );

  if (status && status !== OrderStatus.All) {
    return {
      data: ordersByStatus.data,
      isLoading: ordersByStatus.isLoading,
      isError: ordersByStatus.isError,
    };
  }

  return {
    data: orders.data,
    isLoading: orders.isLoading,
    isError: orders.isError,
  };
};
