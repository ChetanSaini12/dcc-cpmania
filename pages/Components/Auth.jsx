import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { checkLoginStatus } from '../utils/Isauth';

export default function withAuth(WrappedComponent) {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const isLogin = checkLoginStatus();
      if (!isLogin) {
        router.push('/Login'); 
      }
    }, [router]);

    return <WrappedComponent {...props} />
  };
}
