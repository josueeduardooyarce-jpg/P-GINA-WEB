'use client'

import Image from 'next/image'
import { ClipboardList, FileClock, UserX, Users } from 'lucide-react'
import { useI18n } from '@/components/i18n-provider'
import { Reveal, Section, SectionHeading } from '@/components/landing/shared'

const icons = [ClipboardList, UserX, FileClock, Users]

export function ProblemSection() {
  const { t } = useI18n()

  return (
    <Section id="problema" labelledBy="problem-title">
      <SectionHeading
        id="problem-title"
        eyebrow={t.problem.eyebrow}
        title={t.problem.title}
        subtitle={t.problem.subtitle}
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal className="relative hidden overflow-hidden rounded-2xl border border-border lg:block">
          <Image
            src="/images/equipo-dashboard.webp"
            alt="Profesional revisando indicadores de su negocio en una laptop"
            width={736}
            height={1104}
            className="absolute inset-0 size-full object-cover"
          />
          <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-azure/50 to-transparent" />
        </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {t.problem.items.map((item, index) => {
          const Icon = icons[index]
          return (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card/50 p-6 md:p-8">
                <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
      </div>
    </Section>
  )
}
