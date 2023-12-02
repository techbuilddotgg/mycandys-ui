'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

interface ProfileFormData {
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
}

const Profile = () => {
  const { register } = useForm<ProfileFormData>({
    defaultValues: {
      email: '',
      phone: '',
      address: '',
      postalCode: '',
      city: '',
      country: '',
    },
  });

  return (
    <div>
      <h1 className={'text-center text-3xl font-bold'}>Profile</h1>
      <div
        style={{
          backgroundImage: `url(https://cdn.truelancer.com/user-picture/2838646-61dc873dc473b.jpg)`,
        }}
        className="m-auto my-4 h-16 w-16 rounded-full border-2 border-black bg-cover bg-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
      />
      <form className={'mt-4 flex flex-col gap-4'}>
        <Input {...register('email')} placeholder={'Email'} />
        <Input {...register('phone')} placeholder={'Phone'} />
        <Input {...register('country')} placeholder={'Country'} />
        <Input {...register('address')} placeholder={'Address'} />
        <Input {...register('postalCode')} placeholder={'Postal Code'} />
        <Input {...register('city')} placeholder={'City'} />
        <Button>SAVE</Button>
      </form>
    </div>
  );
};

export default Profile;
