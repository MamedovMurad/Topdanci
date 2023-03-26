import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface PrivateRouteProps {
  isLoggedIn: boolean;
}

const withPrivateRoute = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P & PrivateRouteProps> => {
  const Wrapper: React.FC<P & PrivateRouteProps> = ({ ...props }) => {
   
    
    const router = useRouter();

    useEffect(() => {
      if (!localStorage.getItem('agent')) {
        router.push('/login');
      }
    }, []);



    return <WrappedComponent {...props as P} />;
  };

  return Wrapper;
};

export default withPrivateRoute;