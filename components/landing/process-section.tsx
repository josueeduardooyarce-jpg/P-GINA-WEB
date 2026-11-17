'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { useI18n } from '@/components/i18n-provider'
import { Reveal, Section, SectionHeading } from '@/components/landing/shared'

export function ProcessSection() {
  const { t } = useI18n()

  return (
    <Section id="proceso" labelledBy="process-title" className="border-t border-border">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionHeading
          id="process-title"
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          subtitle={t.process.subtitle}
        />
        <Reveal>
          <Image
            src="/images/espacio-trabajo.webp"
            alt="Desarrollador construyendo una automatización en su escritorio"
            width={736}
            height={1308}
            className="aspect-[4/3] w-full rounded-2xl border border-border object-cover object-[50%_62%]"
          />
        </Reveal>
      </div>
      <ol className="relative mt-14 flex flex-col gap-0">
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[19px] w-px bg-border md:left-[23px]" />
        {t.process.steps.map((step, index) => (
          <li key={step.title} className="relative">
            <Reveal delay={0.05} className="grid gap-4 pb-10 pl-14 md:grid-cols-[1fr_1fr] md:gap-10 md:pl-20 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-full border border-primary/40 bg-background font-display text-sm font-semibold text-primary md:size-12"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-2 md:pt-2">
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  <span className="sr-only">{`${index + 1}. `}</span>
                  {step.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
              <div className="rounded-xl border border-border bg-card/50 p-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {t.process.deliverablesLabel}
                </p>
                <ul className="flex flex-col gap-2">
                  {step.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-2.5 text-sm">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
