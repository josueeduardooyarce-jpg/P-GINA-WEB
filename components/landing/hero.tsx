'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, Globe2, ShieldCheck } from 'lucide-react'
import { useI18n } from '@/components/i18n-provider'
import { CtaLink } from '@/components/landing/shared'
import { FlowVisual } from '@/components/landing/flow-visual'

const trustIcons = [Globe2, Clock, ShieldCheck]

export function Hero() {
  const { t } = useI18n()

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/hero-ai-chip.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover opacity-30 dark:block [mask-image:linear-gradient(to_bottom,black_25%,transparent_95%)]"
        />
        <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,var(--background)_15%,color-mix(in_oklch,var(--background)_70%,transparent)_55%,transparent)] dark:block" />
        <div className="absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(ellipse_55%_50%_at_75%_15%,color-mix(in_oklch,var(--turquoise)_16%,transparent),transparent),radial-gradient(ellipse_50%_45%_at_95%_40%,color-mix(in_oklch,var(--azure)_20%,transparent),transparent)]" />
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-7"
        >
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
            {t.hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {t.hero.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaLink>{t.hero.ctaPrimary}</CtaLink>
            <CtaLink href="#proceso" variant="ghost" withArrow={false}>
              {t.hero.ctaSecondary}
            </CtaLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <FlowVisual />
        </motion.div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-6xl px-5 md:mt-24 md:px-8">
        <ul className="flex flex-col items-start justify-center gap-4 border-y border-border py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-10">
          {t.hero.trust.map((item, index) => {
            const Icon = trustIcons[index]
            return (
              <li key={item} className="flex items-center gap-2.5">
                <Icon aria-hidden="true" className="size-4 text-primary" />
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
