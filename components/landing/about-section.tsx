'use client'

import Image from 'next/image'
import { Database, Headset, Repeat, TrendingUp, Truck } from 'lucide-react'
import { useI18n } from '@/components/i18n-provider'
import { Reveal, Section, SectionHeading } from '@/components/landing/shared'

const icons = [TrendingUp, Headset, Repeat, Truck, Database]

export function AboutSection() {
  const { t } = useI18n()
  const a = t.about

  return (
    <Section id="nosotros" labelledBy="about-title" className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
          <Image
            src="/images/logo-full.webp"
            alt="Logotipo de Nexura Corp"
            width={1200}
            height={655}
            className="w-full rounded-2xl border border-border"
          />
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <p className="font-display text-lg font-semibold">{a.goalLabel}</p>
            <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">{a.goal}</p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <SectionHeading id="about-title" eyebrow={a.eyebrow} title={a.title} />
          <Reveal className="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
            {a.story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </Reveal>
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-xl font-semibold tracking-tight">{a.focusTitle}</h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {a.focus.map((item, index) => {
                const Icon = icons[index]
                return (
                  <li key={item.title} className="list-none sm:last:col-span-2">
                    <Reveal delay={index * 0.05} className="flex h-full gap-4 rounded-xl border border-border bg-card/50 p-5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    </Reveal>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
