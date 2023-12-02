import axios, { AxiosResponse } from 'axios';
import { APIRoute } from '@/api/routes';
import { LoginRequest, LoginResponse } from '@/models/auth';

export const login = async (body: LoginRequest) => {
  const { data } = (await axios.post(`${APIRoute.AUTH}/login`, body)) as AxiosResponse<LoginResponse>;
  return data;
};

export const logout = async () => {
  return (await axios.post(`${APIRoute.AUTH}/logout`)) as AxiosResponse<void>;
};
