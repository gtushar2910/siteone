"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Header from "../components/Header/Header"
const inter = Inter({ subsets: ['latin'] })
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from 'next-auth/react'
import Footer from '../components/Foorter/Footer'


// export const metadata = {
//   title: 'Information Technology Department',
//   description: 'Developed and Maintained by Web Committee',
// }

export default function RootLayout({ children }) {
  return (

    <html lang="en" className={inter.className}>
      <body className="h-screen">
      <SessionProvider >
        <NextUIProvider>
          <Header></Header>
          {children}
          <Footer></Footer>
        </NextUIProvider>
        </SessionProvider>
      </body>
    </html>

  )
}
