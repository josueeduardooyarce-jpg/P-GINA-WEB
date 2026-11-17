'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { BarChart3, Bot, Check, Database, MessageCircle, Repeat } from 'lucide-react'
import { useI18n } from '@/components/i18n-provider'
import { cn } from '@/lib/utils'

const stepIcons = [MessageCircle, Bot, Database, Repeat, BarChart3]

export function FlowVisual() {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()
  const steps = t.hero.flow.steps
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduceMotion) return
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % (steps.length + 1))
    }, 1300)
    return () => window.clearInterval(id)
  }, [reduceMotion, steps.length])

  const current = reduceMotion ? steps.length : active

  return (
    <figure className="relative rounded-2xl border border-border bg-card/60 p-5 shadow-2xl shadow-black/20 backdrop-blur-sm md:p-6">
      <div className="mb-5 flex items-center justify-between">
        <figcaption className="text-xs text-muted-foreground">{t.hero.flow.caption}</figcaption>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
          </span>
          {t.hero.flow.status}
        </span>
      </div>

      <ol className="relative flex flex-col gap-3">
        <span
          aria-hidden="true"
          className="absolute top-5 bottom-5 left-[19px] w-px bg-border"
        />
        {steps.map((step, index) => {
          const Icon = stepIcons[index]
          const done = index < current
          const isActive = index === current
          return (
            <li
              key={step.title}
              className={cn(
                'relative flex items-center gap-4 rounded-xl border p-3 transition-colors duration-500',
                isActive ? 'border-primary/50 bg-primary/5' : 'border-border bg-background/40',
              )}
            >
              <span
                className={cn(
                  'relative z-10 flex size-10 shrink-0 items-center justify-center rounded-lg border transition-colors duration-500',
                  done || isActive
                    ? 'border-primary/40 bg-primary text-primary-foreground'
                    : 'border-border bg-card text-muted-foreground',
                )}
              >
                {done ? <Check aria-hidden="true" className="size-4" /> : <Icon aria-hidden="true" className="size-4" />}
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-sm font-medium">{step.title}</span>
                <span className="text-xs text-muted-foreground">{step.meta}</span>
              </span>
              <span
                className={cn(
                  'h-1.5 w-12 overflow-hidden rounded-full bg-muted',
                )}
                aria-hidden="true"
              >
                <motion.span
                  className="block h-full rounded-full bg-primary"
                  initial={false}
                  animate={{ width: done ? '100%' : isActive ? '60%' : '0%' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </span>
            </li>
          )
        })}
      </ol>
    </figure>
  )
}
