import axios from 'axios';
import { env } from '@/env.mjs';
import { retrieveSession } from '@/utils/session';

export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const session = retrieveSession();

  if (session) {
    config.headers.Authorization = `Bearer ${session.accessToken}`;
  }

  return config;
});
