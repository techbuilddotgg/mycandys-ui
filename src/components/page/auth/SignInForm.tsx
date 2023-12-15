'use client';
import React from 'react';
import Input from '@/components/ui/Input';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import { useLogin } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { Route } from '@/constants/routes';
import { useSession } from '@/components/providers/SessionProvider';
import { getSession, Session } from '@/utils/session';
import { toast } from 'sonner';

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

  const { update } = useSession();

  const { mutateAsync, isPending } = useLogin({
    onSuccess: () => {
      push(Route.HOME);
      update(getSession() as Session);
    },
  });

  const onSubmit = (data: SignInFormData) => {

    toast.promise(mutateAsync(data), {
      loading: 'Signing in...',
      success: 'Signed in!',
      error: 'Error signing in!',
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
      <Button disabled={isPending} className={'bg-tertiary text-white disabled:opacity-50'}>Sign In</Button>
    </form>
  );
};

export default SignInForm;
