import { Inter } from 'next/font/google'
import withAuth from './Components/Auth'
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Homepage/Homepage';

const inter = Inter({ subsets: ['latin'] })

function home() {
  return (
    <main>
      {/* <Navbar/> */}
      <Homepage/>
    </main>
  )
}

export default withAuth(home);
