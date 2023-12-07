import { APIRoute } from '@/api/routes';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '@/models/auth';
import { api } from '@/api/axios';
import { AxiosResponse } from 'axios';
import { setCookie } from 'cookies-next';
import { cookieOptions, getExpiryDate, SESSION_KEY } from '@/utils/session';

export const login = async (body: LoginRequest) => {
  const { data } = (await api.post(
    `${APIRoute.AUTH}/login`,
    body,
  )) as AxiosResponse<LoginResponse>;

  if (data.access_token) {
    setCookie(SESSION_KEY, JSON.stringify(data), {
      ...cookieOptions,
      expires: getExpiryDate(),
    });
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
