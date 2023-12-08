import { getCookie } from '@/utils/cookie';

export const SESSION_KEY = 'session';

export interface Session {
  access_token?: string;
  refresh_token?: string;
}

export const getSession = (): Session | null => {
  const session = JSON.parse(getCookie(SESSION_KEY) || '{}');
  return session.access_token ? session : null;
};

export const removeCookieSession = () => {
  document.cookie = `${SESSION_KEY}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};
