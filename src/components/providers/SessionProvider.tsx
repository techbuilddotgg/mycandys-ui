'use client';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getSession, removeCookieSession } from '@/utils/session';
import { Session } from '@/utils/session';

type SessionContextType = {
  session: Session | null;
  update: (session: Session) => void;
  remove: () => void;
};

const SessionContext = createContext<SessionContextType>({
  session: null,
  update: () => {},
  remove: () => {},
});

export const SessionProvider = ({
  children,
  session: _session,
}: {
  children: ReactNode;
  session?: Session;
}) => {
  const [session, setSession] = useState<Session | null>(
    _session ? _session : null,
  );

  useEffect(() => {
    const cookie = getSession();

    if (cookie) {
      setSession(cookie);
    }
  }, []);

  const value: SessionContextType = {
    session,
    update: (session: Session) => {
      setSession(session);
    },
    remove: () => {
      setSession(null);
      removeCookieSession();
    },
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};
