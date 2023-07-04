import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { checkLoginStatus } from '../../utils/Isauth';
import { useSelector } from 'react-redux';
// import { checkToken } from '../utils/Isauth';


export default function Auth(props) {
  const loggedIn = useSelector(state => state.login.loggedIn);
  useEffect(() => {
      if (!loggedIn) {
          // checkToken().then((res) => {
          //     console.log("From useEffect of Auth");
          //     console.log(Date());
          // }).catch((err) => {
          //     console.log(err);

          // })
      };
  })

  return (<>{props.children}</>)
}
