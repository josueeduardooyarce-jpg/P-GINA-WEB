'use client'

import Image from 'next/image'
import { FileCheck2, FileLock2, KeyRound, Lock } from 'lucide-react'
import { useI18n } from '@/components/i18n-provider'
import { Reveal, Section, SectionHeading } from '@/components/landing/shared'

const icons = [Lock, FileLock2, KeyRound, FileCheck2]

export function SecuritySection() {
  const { t } = useI18n()

  return (
    <Section id="seguridad" labelledBy="security-title" className="border-t border-border">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionHeading id="security-title" eyebrow={t.security.eyebrow} title={t.security.title} />
        <Reveal>
          <Image
            src="/images/ia-cabeza.webp"
            alt="Cabeza digital con circuitos que representa la inteligencia artificial"
            width={979}
            height={551}
            className="w-full rounded-2xl border border-border"
          />
        </Reveal>
      </div>
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.security.items.map((item, index) => {
          const Icon = icons[index]
          return (
            <li key={item.title}>
              <Reveal delay={index * 0.05} className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card/50 p-5">
                <Icon aria-hidden="true" className="size-5 text-primary" />
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
