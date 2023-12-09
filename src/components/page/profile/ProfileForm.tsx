'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { USER_QUERY_KEY, useUpdateUser, useUser } from '@/hooks/useUser';
import { useQueryClient } from '@tanstack/react-query';

interface ProfileFormData {
  name: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
}

const defaultValues: ProfileFormData = {
  name: '',
  phone: '',
  address: '',
  postalCode: '',
  city: '',
  country: '',
};

const ProfileForm = () => {
  const queryClient = useQueryClient();
  const { data } = useUser();

  const updateUser = useUpdateUser({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [USER_QUERY_KEY],
      });
    },
  });

  const { register, reset, handleSubmit } = useForm<ProfileFormData>({
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (data) {
      reset({
        name: data.email,
        phone: data.phone,
        address: data.address,
        postalCode: data.postalCode,
        city: data.city,
        country: data.country,
      });
    }
  }, [data, reset]);

  const onSubmit = async (formData: ProfileFormData) => {
    await updateUser.mutateAsync(formData);
  };

  return (
    <form
      className={'mt-4 flex flex-col gap-4'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register('name')}
        placeholder={'Name'}
        disabled
        className={'disabled:bg-gray-200'}
      />
      <Input {...register('phone')} placeholder={'Phone'} />
      <Input {...register('country')} placeholder={'Country'} />
      <Input {...register('address')} placeholder={'Address'} />
      <Input {...register('postalCode')} placeholder={'Postal Code'} />
      <Input {...register('city')} placeholder={'City'} />
      <Button>SAVE</Button>
    </form>
  );
};

export default ProfileForm;
