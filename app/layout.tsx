import type { Metadata, Viewport } from 'next'
import { Geist, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { I18nProvider } from '@/components/i18n-provider'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const title = `${siteConfig.name} · Automatización de procesos con IA para pymes`
const description =
  'Agentes de IA, flujos automatizados e integraciones con CRM, ERP y WhatsApp para pymes en crecimiento. Recupera horas de tu equipo y crece sin contratar más personal. Agenda un diagnóstico gratuito.'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  generator: 'v0.app',
  keywords: [
    'automatización con IA',
    'agentes de IA',
    'automatización de procesos',
    'integraciones CRM',
    'WhatsApp Business',
    'pymes',
  ],
  alternates: {
    canonical: '/',
    languages: { es: '/', en: '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f9fc' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1322' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geist.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
        {/* REEMPLAZAR: agrega aquí tu analítica adicional (GA4, Plausible, Meta Pixel...) si la necesitas. */}
      </body>
    </html>
  )
}
