'use client';
import React from 'react';
import Input from '@/components/ui/Input';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const { register, handleSubmit } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: SignInFormData) => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={'flex max-w-full flex-col gap-4 rounded-b-md border-2 border-black bg-white p-5 font-bold'}
    >
      <Input {...register('email')} placeholder={'Email'} />
      <Input {...register('password')} placeholder={'Password'} type={'password'} />
      <Button>Sign In</Button>
    </form>
  );
};

export default SignInForm;
