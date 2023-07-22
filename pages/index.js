import { Inter } from 'next/font/google'
import Homepage from './Components/Homepage/Homepage';

const inter = Inter({ subsets: ['latin'] })

function home() {
  return (
    <main>
      {/* <Navbar/> */}
      <Homepage/>
    </main>
  )
}

export default home;
