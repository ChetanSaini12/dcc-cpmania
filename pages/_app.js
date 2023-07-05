import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import '/styles/Navbar.css'
import '/styles/Home.css'

import { Provider } from 'react-redux'
import store from '../Store/baseStore'
import Auth from './Components/Auth'
import Navbar from './Components/Navbar/Navbar'


export default function App({ Component, pageProps }) {
  
  return (
    <>
      <Provider store={store}>
      <Navbar />
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </Provider>
    </>
  );
}
