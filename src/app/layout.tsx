import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Source_Sans_3 } from 'next/font/google';
import Script from "next/script";


console.log('Intentando cargar fuentes desde:', process.cwd())

const beachResort = localFont({
  src: [
    {
      path: './fonts/BeachResort.ttf',  // Ajusta este nombre según el nombre exacto de tu archivo
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-beach-resort'
})

const gothamMedium = localFont({
  src: [
    {
      path: './fonts/GothamMedium.ttf',  // Ajusta este nombre según el nombre exacto de tu archivo
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-gotham'
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans'
})


export const metadata: Metadata = {
  title: "Netushi",
  description: "Sushi To Go",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${beachResort.variable} ${gothamMedium.variable} ${sourceSans.variable}`}>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <body>
        {children}
      </body>
    </html>
  )
}


