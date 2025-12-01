import type { Metadata } from 'next'
import {
  Plus_Jakarta_Sans,
  Cormorant_Garamond,
  Playwrite_BE_VLG,
  Inria_Serif,
} from 'next/font/google'
import './globals.css'
import { Provider } from '@/components/ui/provider'
import NavBar from '@/components/navbar/nav-bar'

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
})

export const playWrite = Playwrite_BE_VLG({
  weight: '400',
  variable: '--font-play-write',
  display: 'swap',
})

export const inriaSerif = Inria_Serif({
  weight: ['300', '400', '700'],
  style: 'normal',
  variable: '--font-inria-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Estancia Las Cañuelas',
    template: '%s | Estancia Las Cañuelas',
  },
  description:
    'Estancia Las Cañuelas: alojamiento, eventos sociales y empresariales, y escuela de polo desde 1998. Naturaleza, tranquilidad y hospitalidad a minutos de Buenos Aires.',
  keywords: [
    'estancia',
    'Las Cañuelas',
    'polo',
    'escuela de polo',
    'alojamiento',
    'eventos',
    'eventos empresariales',
    'eventos sociales',
    'campo',
    'turismo rural',
    'bautismos',
    'bodas',
    'cumpleaños',
    'cocktails',
    'jornadas de trabajo',
    'escape al campo',
    'Buenos Aires',
  ],
  authors: [{ name: 'Estancia Las Cañuelas' }],
  creator: 'Estancia Las Cañuelas',
  openGraph: {
    title: 'Estancia Las Cañuelas',
    description:
      'Vení a disfrutar de una experiencia única en el campo argentino: polo, hospedaje, eventos y descanso en un entorno natural incomparable.',
    url: 'https://estancialascanuelas.com',
    siteName: 'Estancia Las Cañuelas',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: 'https://estancialascanuelas.com/estancia_las_canuelas.jpg',
        width: 1200,
        height: 630,
        alt: 'Estancia Las Cañuelas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estancia Las Cañuelas',
    description:
      'Alojamiento, polo, eventos y naturaleza cerca de Buenos Aires.',
    images: ['https://estancialascanuelas.com/estancia_las_canuelas.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'travel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className={`
          ${plusJakarta.variable}
          ${cormorant.variable}
          ${playWrite.variable}
          ${inriaSerif.variable}
        `}
      >
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
