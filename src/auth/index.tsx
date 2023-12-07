import { Outlet, Navigate } from 'react-router-dom';

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const signedIn = true;

  if (!signedIn && isPrivate) {
    return <Navigate to='/' replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
}
