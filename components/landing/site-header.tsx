'use client'

import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useI18n } from '@/components/i18n-provider'
import { CtaLink } from '@/components/landing/shared'
import { Logo } from '@/components/landing/logo'
import { locales } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { t, locale, setLocale } = useI18n()
  const { resolvedTheme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#servicios', label: t.nav.services },
    { href: '#proceso', label: t.nav.process },
    { href: '#demos', label: t.nav.demos },
    { href: '#nosotros', label: t.nav.about },
    { href: '#faq', label: t.nav.faq },
  ]

  const languageSwitch = (
    <div
      role="group"
      aria-label={t.nav.language}
      className="flex items-center rounded-full border border-border p-0.5 text-xs font-medium"
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            'rounded-full px-2.5 py-1 uppercase transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
            locale === code
              ? 'bg-foreground text-background'
              : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {code}
        </button>
      ))}
    </div>
  )

  const themeToggle = (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={t.nav.theme}
      className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Sun aria-hidden="true" className="hidden size-4 dark:block" />
      <Moon aria-hidden="true" className="size-4 dark:hidden" />
    </button>
  )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        {t.nav.skip}
      </a>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5 md:px-8">
        <a href="#" className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-sm transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {languageSwitch}
          {themeToggle}
          <CtaLink className="h-10 px-5" withArrow={false}>
            {t.nav.cta}
          </CtaLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          {languageSwitch}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Móvil" className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-3">
              {themeToggle}
              <CtaLink className="flex-1" withArrow={false} onClick={() => setOpen(false)}>
                {t.nav.cta}
              </CtaLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
