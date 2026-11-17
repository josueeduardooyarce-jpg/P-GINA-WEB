'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { BarChart3, CheckCircle2, FileText, MessageCircle, RotateCcw } from 'lucide-react'
import { useI18n } from '@/components/i18n-provider'
import { IllustrativeBadge, Reveal, Section, SectionHeading } from '@/components/landing/shared'
import { cn } from '@/lib/utils'

const tabIcons = [MessageCircle, FileText, BarChart3]

function useSequence(total: number, interval: number, runKey: number) {
  const reduceMotion = useReducedMotion()
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (reduceMotion) {
      setStep(total)
      return
    }
    setStep(0)
    const id = window.setInterval(() => {
      setStep((value) => {
        if (value >= total) {
          window.clearInterval(id)
          return value
        }
        return value + 1
      })
    }, interval)
    return () => window.clearInterval(id)
  }, [total, interval, runKey, reduceMotion])

  return step
}

function ChatDemo({ runKey }: { runKey: number }) {
  const { t } = useI18n()
  const { messages, agent, online, event } = t.demos.chat
  const step = useSequence(messages.length + 1, 1100, runKey)

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 border-b border-border px-5 py-3.5">
        <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary">
          <MessageCircle aria-hidden="true" className="size-4" />
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{agent}</span>
          <span className="text-xs text-primary">{online}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5" aria-live="polite">
        <AnimatePresence initial={false}>
          {messages.slice(0, step).map((message, index) => (
            <motion.p
              key={`${runKey}-${index}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                'max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
                message.from === 'user'
                  ? 'self-start rounded-bl-sm bg-muted'
                  : 'self-end rounded-br-sm bg-primary text-primary-foreground',
              )}
            >
              {message.text}
            </motion.p>
          ))}
        </AnimatePresence>
        {step > messages.length ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-dashed border-primary/40 px-3 py-2 text-xs text-primary"
          >
            <CheckCircle2 aria-hidden="true" className="size-4" />
            {event}
          </motion.p>
        ) : null}
      </div>
    </div>
  )
}

function DocumentDemo({ runKey }: { runKey: number }) {
  const { t } = useI18n()
  const { file, extracting, done, fields } = t.demos.document
  const step = useSequence(fields.length + 1, 650, runKey)
  const finished = step > fields.length

  return (
    <div className="grid h-full gap-5 p-5 md:grid-cols-[0.8fr_1fr]">
      <div className="flex flex-col gap-3 rounded-xl border border-border bg-background/60 p-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <FileText aria-hidden="true" className="size-4" />
          {file}
        </div>
        <div aria-hidden="true" className="relative flex flex-1 flex-col gap-2.5 overflow-hidden rounded-lg bg-muted/60 p-4">
          <span className="h-2.5 w-1/2 rounded bg-foreground/15" />
          <span className="h-2 w-1/3 rounded bg-foreground/10" />
          <span className="mt-3 h-2 w-full rounded bg-foreground/10" />
          <span className="h-2 w-5/6 rounded bg-foreground/10" />
          <span className="h-2 w-2/3 rounded bg-foreground/10" />
          <span className="mt-3 h-2 w-full rounded bg-foreground/10" />
          <span className="h-2 w-4/5 rounded bg-foreground/10" />
          <span className="mt-auto ml-auto h-3 w-1/3 rounded bg-foreground/15" />
          {!finished ? (
            <motion.span
              className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-primary/25 to-transparent"
              animate={{ top: ['-10%', '100%'] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
            />
          ) : null}
        </div>
      </div>
      <div className="flex flex-col gap-2" aria-live="polite">
        <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {finished ? done : `${extracting}...`}
        </p>
        <dl className="flex flex-col gap-2">
          {fields.map((field, index) => (
            <div
              key={field.label}
              className={cn(
                'flex items-center justify-between gap-4 rounded-lg border px-3.5 py-2.5 text-sm transition-colors duration-300',
                index < step ? 'border-primary/30 bg-primary/5' : 'border-border',
              )}
            >
              <dt className="text-muted-foreground">{field.label}</dt>
              <dd className={cn('font-medium transition-opacity duration-300', index < step ? 'opacity-100' : 'opacity-0')}>
                {field.value}
              </dd>
            </div>
          ))}
        </dl>
        {finished ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 flex items-center gap-2 text-sm text-primary"
          >
            <CheckCircle2 aria-hidden="true" className="size-4" />
            {done}
          </motion.p>
        ) : null}
      </div>
    </div>
  )
}

const chartValues = [5, 8, 6, 9, 11, 4, 5]

function DashboardDemo({ runKey }: { runKey: number }) {
  const { t } = useI18n()
  const { title, period, sent, kpis, chartLabel, days, note } = t.demos.dashboard
  const step = useSequence(2, 900, runKey)
  const max = Math.max(...chartValues)

  return (
    <div className="flex h-full flex-col gap-5 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{title}</p>
          <p className="text-xs text-muted-foreground">{period}</p>
        </div>
        <span className="text-xs text-muted-foreground">{note}</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-xl border border-border bg-background/60 p-3.5">
            <p className="text-xs text-muted-foreground">{kpi.label}</p>
            <p className="mt-1 font-display text-2xl font-semibold">{kpi.value}</p>
          </div>
        ))}
      </div>
      <figure className="flex flex-1 flex-col rounded-xl border border-border bg-background/60 p-4">
        <figcaption className="mb-3 text-xs text-muted-foreground">{chartLabel}</figcaption>
        <div className="flex h-32 flex-1 items-end gap-2.5" aria-hidden="true">
          {chartValues.map((value, index) => (
            <div key={index} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
              <motion.span
                key={`${runKey}-${index}`}
                className="w-full rounded-md bg-primary/80"
                initial={{ height: 0 }}
                animate={{ height: `${(value / max) * 100}%` }}
                transition={{ duration: 0.7, delay: index * 0.06, ease: 'easeOut' }}
              />
              <span className="text-[11px] text-muted-foreground">{days[index]}</span>
            </div>
          ))}
        </div>
      </figure>
      <p
        className={cn(
          'flex items-center gap-2 text-sm text-primary transition-opacity duration-500',
          step >= 2 ? 'opacity-100' : 'opacity-0',
        )}
      >
        <CheckCircle2 aria-hidden="true" className="size-4" />
        {sent}
      </p>
    </div>
  )
}

const demos = [ChatDemo, DocumentDemo, DashboardDemo]

export function DemosSection() {
  const { t } = useI18n()
  const [active, setActive] = useState(0)
  const [runKey, setRunKey] = useState(0)
  const ActiveDemo = demos[active]

  const select = (index: number) => {
    setActive(index)
    setRunKey((value) => value + 1)
  }

  return (
    <Section id="demos" labelledBy="demos-title" className="border-t border-border">
      <SectionHeading
        id="demos-title"
        eyebrow={t.demos.eyebrow}
        title={t.demos.title}
        subtitle={t.demos.subtitle}
      />

      <Reveal className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.4fr]">
        <div role="tablist" aria-label={t.demos.eyebrow} className="flex flex-col gap-3">
          {t.demos.tabs.map((tab, index) => {
            const Icon = tabIcons[index]
            const selected = active === index
            return (
              <button
                key={tab.title}
                type="button"
                role="tab"
                id={`demo-tab-${index}`}
                aria-selected={selected}
                aria-controls="demo-panel"
                onClick={() => select(index)}
                className={cn(
                  'flex items-start gap-4 rounded-2xl border p-5 text-left transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50',
                  selected ? 'border-primary/50 bg-primary/5' : 'border-border hover:bg-card',
                )}
              >
                <span
                  className={cn(
                    'flex size-10 shrink-0 items-center justify-center rounded-xl',
                    selected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground',
                  )}
                >
                  <Icon aria-hidden="true" className="size-4" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-medium">{tab.title}</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{tab.description}</span>
                </span>
              </button>
            )
          })}
        </div>

        <div
          id="demo-panel"
          role="tabpanel"
          aria-labelledby={`demo-tab-${active}`}
          className="flex min-h-[460px] flex-col overflow-hidden rounded-2xl border border-border bg-card/60"
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <div aria-hidden="true" className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-foreground/15" />
              <span className="size-2.5 rounded-full bg-foreground/15" />
              <span className="size-2.5 rounded-full bg-foreground/15" />
            </div>
            <div className="flex items-center gap-3">
              <IllustrativeBadge>{t.demos.badge}</IllustrativeBadge>
              <button
                type="button"
                onClick={() => setRunKey((value) => value + 1)}
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                <RotateCcw aria-hidden="true" className="size-3.5" />
                {t.demos.replay}
              </button>
            </div>
          </div>
          <div className="flex-1">
            <ActiveDemo key={`${active}-${runKey}`} runKey={runKey} />
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
