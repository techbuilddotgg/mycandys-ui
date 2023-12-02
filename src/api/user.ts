import axios, { AxiosResponse } from 'axios';
import { APIRoute } from '@/api/routes';
import { User } from '@/models/user';

export const getUser = async (id: string) => {
  const { data } = (await axios.get(`${APIRoute.USERS}/${id}`)) as AxiosResponse<User>;
  return data;
};
