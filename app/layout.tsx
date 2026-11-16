import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Fontes hospedadas no próprio site (Inter e Gelasio, licença OFL)
const inter = localFont({
  src: './fonts/inter-latin-wght-normal.woff2',
  weight: '100 900',
  variable: '--font-inter',
  display: 'swap',
})

const gelasio = localFont({
  src: [
    { path: './fonts/gelasio-latin-500-italic.woff2', weight: '500', style: 'italic' },
    { path: './fonts/gelasio-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-gelasio',
  display: 'swap',
})

const descricao =
  'Sistema de gestão de gado de corte para pequenos e médios produtores: saúde animal, pesagens, manejo e custos em um só lugar, com modo offline previsto para o curral.'

export const metadata: Metadata = {
  metadataBase: new URL('https://gadogest.com.br'),
  title: 'GadoGest | Onde a eficiência vira arroba',
  description: descricao,
  openGraph: {
    title: 'GadoGest | Onde a eficiência vira arroba',
    description: descricao,
    url: 'https://gadogest.com.br',
    siteName: 'GadoGest',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#12332a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${gelasio.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
