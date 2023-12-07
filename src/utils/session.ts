import { GetServerSidePropsContext } from 'next';
import { IncomingMessage, ServerResponse } from 'http';
import { getCookie } from 'cookies-next';

export const SESSION_KEY = 'session';

interface Session {
  accessToken?: string;
  refreshToken?: string;
}

let context = <GetServerSidePropsContext>{};
let clientSession = <Session | null>{};

const isServer = () => typeof window === 'undefined';

const setContext = (ctx: GetServerSidePropsContext) => {
  context = ctx;
};

const getContext = () => context;

const setClientSession = (session: Session | null) => {
  clientSession = session;
};

const getClientSession = () => clientSession;

const isValidSession = (session: Session | null): boolean => {
  return !(!session || !session.accessToken);
};

const getServerSession = (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage>,
): Session | null => {
  const session: Session = JSON.parse(
    getCookie(SESSION_KEY, {
      req,
      res,
      ...cookieOptions,
    })?.toString() || 'null',
  );

  if (!isValidSession(session)) {
    return null;
  }

  return session;
};

export const retrieveSession = (): Session | null => {
  let session: Session | null;

  if (!isServer()) {
    session = getClientSession();
  } else {
    const ctx = getContext();
    session = getServerSession(ctx.req, ctx.res);
  }

  setClientSession(session);
  return session;
};

export const cookieOptions = {
  httpOnly: true,
  ...(process.env.NODE_ENV === 'development'
    ? { secure: false }
    : { secure: true }),
};

export const getExpiryDate = (numOfDays = 30) => {
  const date = new Date();
  date.setDate(date.getDate() + numOfDays);
  return date;
};
