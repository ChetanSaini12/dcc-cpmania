import { Inter } from 'next/font/google'
import withAuth from './Components/AuthHOC'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold text-center">Hunting Coder</h1>
    </main>
  )
}

export default withAuth(Home)
