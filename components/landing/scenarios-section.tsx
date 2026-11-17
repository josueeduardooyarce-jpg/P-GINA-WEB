'use client'

import { ArrowDown } from 'lucide-react'
import { useI18n } from '@/components/i18n-provider'
import { IllustrativeBadge, Reveal, Section, SectionHeading } from '@/components/landing/shared'

export function ScenariosSection() {
  const { t } = useI18n()
  const s = t.scenarios

  return (
    <Section id="escenarios" labelledBy="scenarios-title" className="border-t border-border">
      <SectionHeading id="scenarios-title" eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {s.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.07}>
            <article className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card/50 p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <IllustrativeBadge>{s.label}</IllustrativeBadge>
                <span className="text-xs text-muted-foreground">{item.industry}</span>
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-balance">
                {item.title}
              </h3>
              <div className="flex flex-col gap-2 text-sm">
                <div className="rounded-xl bg-muted/60 p-4">
                  <p className="mb-1 text-xs font-medium text-muted-foreground">{s.beforeLabel}</p>
                  <p className="leading-relaxed">{item.before}</p>
                </div>
                <ArrowDown aria-hidden="true" className="mx-auto size-4 text-muted-foreground" />
                <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
                  <p className="mb-1 text-xs font-medium text-primary">{s.afterLabel}</p>
                  <p className="leading-relaxed">{item.after}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
