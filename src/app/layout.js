import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nahuel Pages Profile',
  description: 'Perfil De Nahuel Pages',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body className='body'>
        {children}
      </body>
    </html>
  )
}
