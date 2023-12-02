import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const { register, handleSubmit } = useForm<SignUpFormData>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const onSubmit = (data: SignUpFormData) => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={'flex max-w-full flex-col gap-4 border-2 border-black bg-white p-5 font-bold'}
    >
      <Input {...register('email')} placeholder={'Email'} />
      <Input {...register('password')} placeholder={'Password'} type={'password'} />
      <Input {...register('confirmPassword')} placeholder={'Confirm Password'} type={'password'} />
      <Button>Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
