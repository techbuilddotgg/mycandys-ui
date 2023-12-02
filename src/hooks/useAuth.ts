import { useMutation, UseMutationOptions } from 'react-query';
import { login, logout } from '@/api/auth';
import { AxiosError } from 'axios';
import { LoginRequest, LoginResponse } from '@/models/auth';

const LOGIN_MUTATION_KEY = 'login';
export const useLogin = (opts?: UseMutationOptions<LoginResponse, AxiosError, LoginRequest, unknown>) => {
  return useMutation({
    mutationKey: LOGIN_MUTATION_KEY,
    mutationFn: login,
    ...opts,
  });
};

const LOGOUT_MUTATION_KEY = 'logout';
const useLogout = (opts?: UseMutationOptions<{}, AxiosError, {}, unknown>) => {
  return useMutation({
    mutationKey: LOGOUT_MUTATION_KEY,
    mutationFn: logout,
    ...opts,
  });
};
