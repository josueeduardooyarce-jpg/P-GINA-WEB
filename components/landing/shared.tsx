'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  id,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  id?: string
}) {
  return (
    <Reveal
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
      )}
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2
        id={id}
        className="font-display text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{subtitle}</p>
      ) : null}
    </Reveal>
  )
}

export function Section({
  id,
  labelledBy,
  className,
  children,
}: {
  id?: string
  labelledBy?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn('py-20 md:py-28', className)}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  )
}

export function CtaLink({
  href = '#contacto',
  children,
  variant = 'primary',
  className,
  withArrow = true,
  onClick,
}: {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
  withArrow?: boolean
  onClick?: () => void
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50',
        variant === 'primary'
          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
          : 'border border-border bg-transparent text-foreground hover:bg-muted',
        className,
      )}
    >
      {children}
      {withArrow ? (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-0.5"
        />
      ) : null}
    </a>
  )
}

export function IllustrativeBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-primary/40 bg-primary/5 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-primary">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
      {children}
    </span>
  )
}
