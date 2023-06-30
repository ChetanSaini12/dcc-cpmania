import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { checkLoginStatus } from '../utils/isauth';

export default function withAuth(Component) {
    return (props) => {
        const router = useRouter();

        useEffect(() => {
            const isLogin = checkLoginStatus();
            if(!isLogin)
            {
                router.push('/Login');
            }
        }, []);
        return <Component {...props} />
    }
}

