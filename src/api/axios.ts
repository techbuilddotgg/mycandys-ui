import axios from 'axios';
import { env } from '@/env.mjs';
import { getSession } from '@/utils/session';

export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const session = getSession();

  if (session) {
    config.headers.Authorization = `Bearer ${session.access_token}`;
  }

  return config;
});
