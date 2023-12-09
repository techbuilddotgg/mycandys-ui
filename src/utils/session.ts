import { deleteCookie, getCookie, setCookie } from 'cookies-next';

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
  deleteCookie(SESSION_KEY);
};

export const setSessionCookie = (session: Session) => {
  setCookie(SESSION_KEY, JSON.stringify(session));
};
