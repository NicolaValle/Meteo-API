import { AuthGuardProps } from './AuthGuard.types';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores/stores';
import * as PATHS from '../constants/path';

const GuestGuard = ({ children }: AuthGuardProps) => {
  const user = useAuthStore((state) => state.userData);

  if (!user) {
    return <>{children}</>;
  } else {
    return <Navigate to={PATHS.WEATHER} />;
  }
};

export default GuestGuard;
