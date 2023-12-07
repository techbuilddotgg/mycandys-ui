import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { login, logout, register } from '@/api/auth';
import { AxiosError } from 'axios';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '@/models/auth';

const LOGIN_MUTATION_KEY = 'login';
export const useLogin = (
  opts?: UseMutationOptions<LoginResponse, AxiosError, LoginRequest, unknown>,
) => {
  return useMutation({
    mutationKey: [LOGIN_MUTATION_KEY],
    mutationFn: login,
    ...opts,
  });
};

const LOGOUT_MUTATION_KEY = 'logout';
const useLogout = (opts?: UseMutationOptions<{}, AxiosError, {}, unknown>) => {
  return useMutation({
    mutationKey: [LOGOUT_MUTATION_KEY],
    mutationFn: logout,
    ...opts,
  });
};

const REGISTER_MUTATION_KEY = 'register';
export const useRegisterUser = (
  opts?: UseMutationOptions<
    RegisterResponse,
    AxiosError,
    RegisterRequest,
    unknown
  >,
) => {
  return useMutation({
    mutationKey: [REGISTER_MUTATION_KEY],
    mutationFn: register,
    ...opts,
  });
};
