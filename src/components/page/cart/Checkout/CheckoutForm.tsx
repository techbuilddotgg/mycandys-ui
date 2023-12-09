'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Route } from '@/constants/routes';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';
import { useCreateOrder } from '@/hooks/useOrder';
import { createOrderData } from '@/models/order';
import { User } from '@/models/user';
import { useCartContext } from '@/components/providers/CartProvider';
import { useUser } from '@/hooks/useUser';
import { toast } from 'sonner';

interface CheckoutFormData {
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
}

const defaultValues: CheckoutFormData = {
  email: '',
  phone: '',
  address: '',
  postalCode: '',
  city: '',
  country: '',
};

const CheckoutForm = () => {
  const { push } = useRouter();

  const { register, handleSubmit, reset } = useForm<CheckoutFormData>({
    defaultValues,
  });

  const { cartId } = useCartContext();
  const { data: cart } = useCart(cartId, { enabled: !!cartId });

  const createOrder = useCreateOrder({
    onSuccess: () => {
      push(Route.FINISH);
    },
  });

  const { data: userDetails } = useUser();

  useEffect(() => {
    if (userDetails) {
      reset({
        email: userDetails.email,
        phone: userDetails.phone,
        address: userDetails.address,
        postalCode: userDetails.postalCode,
        city: userDetails.city,
        country: userDetails.country,
      });
    }
  }, [reset, userDetails]);

  const onSubmit = async (data: CheckoutFormData) => {
    if (!cart) return;

    const user: User = {
      ...data,
      id: userDetails?.id as string,
      name: '',
    };

    const order = createOrderData(user, cart, cartId);
    toast.promise(
      createOrder.mutateAsync({
        order,
      }),
      {
        loading: 'Creating order...',
        success: 'Created order!',
        error: 'Error creating order!',
      },
    );
  };

  return (
    <form
      className={'mt-8 flex flex-col gap-4'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input {...register('email')} placeholder={'Email'} />
      <Input {...register('phone')} placeholder={'Phone'} />
      <Input {...register('country')} placeholder={'Country'} />
      <Input {...register('address')} placeholder={'Address'} />
      <Input {...register('postalCode')} placeholder={'Postal Code'} />
      <Input {...register('city')} placeholder={'City'} />
      <Button>FINISH</Button>
    </form>
  );
};

export default CheckoutForm;
