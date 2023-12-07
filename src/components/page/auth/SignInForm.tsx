'use client';
import React from 'react';
import Input from '@/components/ui/Input';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import { useLogin } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { Route } from '@/constants/routes';
import { env } from '@/env.mjs';

interface SignInFormData {
  email: string;
  password: string;
}

const defaultValues: SignInFormData = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm<SignInFormData>({
    defaultValues,
  });

  const { mutateAsync } = useLogin({
    onSuccess: () => {
      push(Route.HOME);
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    await mutateAsync(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={
        'flex max-w-full flex-col gap-4 rounded-b-md border-2 border-black bg-white p-5 font-bold'
      }
    >
      <Input {...register('email')} placeholder={'Email'} />
      <Input
        {...register('password')}
        placeholder={'Password'}
        type={'password'}
      />
      <Button>Sign In</Button>
    </form>
  );
};

export default SignInForm;
