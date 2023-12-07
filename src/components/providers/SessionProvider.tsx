'use client';
import { Session } from 'inspector';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';

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
  const { push } = useRouter();
  const [session, setSession] = useState<Session | null>(
    _session ? _session : null,
  );

  useEffect(() => {}, []);

  const value: SessionContextType = {
    session,
    update: (session: Session) => {
      setSession(session);
    },
    remove: () => {
      setSession(null);
    },
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};
