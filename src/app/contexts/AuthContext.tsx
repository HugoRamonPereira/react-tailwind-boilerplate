import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState
} from 'react';
import { User } from '../entities/User';
import { useQuery } from '@tanstack/react-query';
import { localStorageKeys } from '../config/localStorageKeys';
import toast from 'react-hot-toast';
import { userService } from '../services/user-service';

interface AuthContextProps {
  user: User | undefined;
  signedIn: boolean;
  signIn(accessToken: string): void;
  signOut(): void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN
    );

    return !!storedAccessToken;
  });

  const { isError, isSuccess, data } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => userService.me(),
    enabled: signedIn,
    staleTime: Infinity
  });

  const signIn = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    setSignedIn(false);
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error('Session expired!');
      signOut();
    }
  }, [isError, signOut]);

  return (
    <AuthContext.Provider
      value={{
        user: data,
        signedIn: isSuccess && signedIn,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
