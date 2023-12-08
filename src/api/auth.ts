import { APIRoute } from '@/api/routes';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '@/models/auth';
import { api } from '@/api/axios';
import { AxiosResponse } from 'axios';
import { SESSION_KEY } from '@/utils/session';
import { setCookie } from '@/utils/cookie';

export const login = async (body: LoginRequest) => {
  const { data } = (await api.post(
    `${APIRoute.AUTH}/login`,
    body,
  )) as AxiosResponse<LoginResponse>;

  if (data.access_token) {
    setCookie(SESSION_KEY, JSON.stringify(data));
  }

  return data;
};

export const logout = async () => {
  return (await api.post(`${APIRoute.AUTH}/logout`)) as AxiosResponse<void>;
};

export const register = async (body: RegisterRequest) => {
  const { data } = (await api.post(
    `${APIRoute.AUTH}/register`,
    body,
  )) as AxiosResponse<RegisterResponse>;
  return data;
};
