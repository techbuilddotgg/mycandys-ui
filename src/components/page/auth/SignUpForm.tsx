import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useRegisterUser } from '@/hooks/useAuth';
import { env } from '@/env.mjs';
import { useRouter } from 'next/navigation';
import { Route } from '@/constants/routes';

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultValues: SignUpFormData = {
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const { push } = useRouter();
  const { register, handleSubmit, reset } = useForm<SignUpFormData>({
    defaultValues,
  });

  const { mutateAsync } = useRegisterUser({
    onSuccess: () => {
      reset();
      push(Route.LOGIN);
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    await mutateAsync({
      email: data.email,
      password: data.password,
      role: 'ADMIN',
    });
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
      <Input
        {...register('confirmPassword')}
        placeholder={'Confirm Password'}
        type={'password'}
      />
      <Button>Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
