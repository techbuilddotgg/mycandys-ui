import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import type { OptionsType } from 'cookies-next/lib/types';

export const SESSION_KEY = 'session';

export interface Session {
  userId?: string;
  access_token?: string;
  refresh_token?: string;
}

export const getSession = (opts?: OptionsType): Session | null => {
  const session = JSON.parse(getCookie(SESSION_KEY, opts) || '{}');
  return session.access_token ? session : null;
};

export const removeCookieSession = () => {
  deleteCookie(SESSION_KEY);
};

export const setSessionCookie = (session: Session) => {
  setCookie(SESSION_KEY, JSON.stringify(session));
};
