'use client'

import Image from 'next/image'
import { BarChart3, FileScan, MessagesSquare, Plug, Settings2, Workflow } from 'lucide-react'
import { useI18n } from '@/components/i18n-provider'
import { Reveal, Section, SectionHeading } from '@/components/landing/shared'

const icons = [MessagesSquare, Workflow, Plug, FileScan, BarChart3, Settings2]
const chipColors = [
  'bg-primary/10 text-primary',
  'bg-turquoise/10 text-turquoise',
  'bg-sky/10 text-sky',
  'bg-azure/15 text-sky',
  'bg-primary/10 text-primary',
  'bg-turquoise/10 text-turquoise',
]

export function ServicesSection() {
  const { t } = useI18n()

  return (
    <Section id="servicios" labelledBy="services-title" className="border-t border-border">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <SectionHeading
          id="services-title"
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />
        <Reveal>
          <Image
            src="/images/automatizacion-flujo.webp"
            alt="Ilustración de una persona supervisando un flujo automatizado con IA"
            width={800}
            height={534}
            className="w-full rounded-2xl border border-border"
          />
        </Reveal>
      </div>
      <div className="mt-14 grid overflow-hidden rounded-2xl border border-border sm:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((item, index) => {
          const Icon = icons[index]
          return (
            <Reveal
              key={item.title}
              delay={(index % 3) * 0.06}
              className="border-border sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 [&:not(:last-child)]:border-b sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0 sm:[&:nth-child(-n+4)]:border-b lg:[&:nth-child(-n+3)]:border-b"
            >
              <article className="group flex h-full flex-col gap-4 bg-card/40 p-6 transition-colors hover:bg-card md:p-8">
                <span className={`flex size-11 items-center justify-center rounded-xl ${chipColors[index]}`}>
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
