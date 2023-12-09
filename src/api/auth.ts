import { APIRoute } from '@/api/routes';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '@/models/auth';
import { api } from '@/api/axios';
import { AxiosResponse } from 'axios';
import { Session, setSessionCookie } from '@/utils/session';

export const login = async (body: LoginRequest) => {
  const { data } = (await api.post(
    `${APIRoute.AUTH}/login`,
    body,
  )) as AxiosResponse<LoginResponse>;

  const session: Session = {
    ...data,
  };

  if (data.access_token) {
    setSessionCookie(session);
  }

  const { userId } = await verifyToken();

  if (userId) {
    session.userId = userId;
    setSessionCookie(session);
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

export const verifyToken = async () => {
  const { data } = (await api.get(`${APIRoute.AUTH}/verify`)) as AxiosResponse<{
    userId: string;
  }>;
  return data;
};
