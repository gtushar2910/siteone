import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/Header/Header"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Information Technology Department',
  description: 'Developed and Maintained by Web Committee',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header></Header>
        {children}
        </body>
    </html>
  )
}
