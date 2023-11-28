import { AuthGuardProps } from './AuthGuard.types';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores/stores';

const AuthGuard = ({ children }: AuthGuardProps) => {
  const user = useAuthStore((state) => state.userData);

  if (user) return <>{children}</>;
  else {
    alert('Invalid email or password!');
    return <Navigate to={'/'} />;
  }
};

export default AuthGuard;
