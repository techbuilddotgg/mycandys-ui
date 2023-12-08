import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useUser } from '@/hooks/useUser';

interface ProfileFormData {
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
}

const defaultValues: ProfileFormData = {
  email: '',
  phone: '',
  address: '',
  postalCode: '',
  city: '',
  country: '',
};

const ProfileForm = () => {
  const { data } = useUser();

  const { register } = useForm<ProfileFormData>({
    defaultValues: data ? data : defaultValues,
  });

  return (
    <form className={'mt-4 flex flex-col gap-4'}>
      <Input {...register('email')} placeholder={'Email'} />
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
