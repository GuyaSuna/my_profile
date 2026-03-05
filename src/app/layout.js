import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nahuel Pages | Full Stack Developer Portfolio',
  description: 'Portfolio de Nahuel Pages - Full Stack Developer especializado en React, Next.js y tecnologías modernas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen selection:bg-primary selection:text-white`}>
        {children}
      </body>
    </html>
  )
}
