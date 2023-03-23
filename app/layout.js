import { Inter } from 'next/font/google';
import './globals.css'
import Footer from './components/footerMenu/page'
import Header from './components/header/page'


export const metadata = {
  title: 'Swipe North',
  description: 'Swipe North job search prototype, group 6',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
