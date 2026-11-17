'use client'

import { Mail, MessageCircle } from 'lucide-react'
import { useI18n } from '@/components/i18n-provider'
import { Logo } from '@/components/landing/logo'
import { siteConfig, whatsappLink } from '@/lib/site-config'

export function SiteFooter() {
  const { t } = useI18n()
  const linkClass =
    'rounded-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring'

  const links = [
    { href: '#servicios', label: t.nav.services },
    { href: '#proceso', label: t.nav.process },
    { href: '#demos', label: t.nav.demos },
    { href: '#nosotros', label: t.nav.about },
    { href: '#faq', label: t.nav.faq },
  ]

  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-8">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
        </div>
        <nav aria-label={t.footer.navTitle}>
          <h2 className="mb-4 text-sm font-medium">{t.footer.navTitle}</h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="mb-4 text-sm font-medium">{t.footer.contactTitle}</h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <a href={`mailto:${siteConfig.email}`} className={`${linkClass} inline-flex items-center gap-2`}>
                <Mail aria-hidden="true" className="size-4" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={whatsappLink(t.whatsapp.message)} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-2`}>
                <MessageCircle aria-hidden="true" className="size-4" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-medium">{t.footer.legalTitle}</h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><a href="/privacidad" className={linkClass}>{t.footer.privacy}</a></li>
            <li><a href="/terminos" className={linkClass}>{t.footer.terms}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto w-full max-w-6xl px-5 py-6 text-xs text-muted-foreground md:px-8">
          {`© ${new Date().getFullYear()} ${siteConfig.legalName}. ${t.footer.rights}`}
        </p>
      </div>
    </footer>
  )
}
