'use client'

import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CalendarDays, Check, CheckCircle2, Loader2 } from 'lucide-react'
import { useI18n } from '@/components/i18n-provider'
import { Reveal, Section, SectionHeading } from '@/components/landing/shared'
import { WhatsAppLink } from '@/components/landing/whatsapp-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

type ContactPayload = {
  name: string
  email: string
  company: string
  investment: string
  process: string
}

const selectClass =
  'h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive [&>option]:bg-popover [&>option]:text-popover-foreground'

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string
  label: string
  error?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function CalendarEmbed() {
  const { t } = useI18n()

  // REEMPLAZAR: define siteConfig.calendarUrl (Cal.com o Calendly) para mostrar tu calendario aquí.
  if (siteConfig.calendarUrl) {
    return (
      <iframe
        src={siteConfig.calendarUrl}
        title={t.contact.calendar.title}
        loading="lazy"
        className="h-[620px] w-full rounded-xl border border-border bg-background"
      />
    )
  }

  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border p-6 text-center text-muted-foreground">
      <CalendarDays aria-hidden="true" className="size-8" />
      <p className="text-sm">{t.contact.calendar.placeholder}</p>
      <p className="font-mono text-xs">{t.contact.calendar.hint}</p>
    </div>
  )
}

export function ContactSection() {
  const { t } = useI18n()
  const f = t.contact.form
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, f.errors.name).max(100),
        email: z.email(f.errors.email).max(200),
        company: z.string().trim().min(2, f.errors.company).max(150),
        process: z.string().trim().min(20, f.errors.process).max(2000),
        investment: z.string().min(1, f.errors.required),
      }),
    [f],
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactPayload>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      process: '',
      investment: '',
    },
  })

  const onSubmit = async (values: ContactPayload) => {
    setStatus('idle')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          subject: `Nueva solicitud de diagnóstico: ${values.company}`,
          from_name: `${siteConfig.name} (sitio web)`,
          name: values.name,
          email: values.email,
          company: values.company,
          investment: values.investment,
          message: values.process,
        }),
      })
      const result = await response.json()
      if (response.ok && result.success) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const aria = (name: keyof ContactPayload) => ({
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  return (
    <Section id="contacto" labelledBy="contact-title" className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="contact-title"
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
          <ul className="flex flex-col gap-3">
            {t.contact.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3 text-sm">
                <Check aria-hidden="true" className="size-4 text-primary" />
                {bullet}
              </li>
            ))}
          </ul>
          <WhatsAppLink className="w-full sm:w-fit" />
          {siteConfig.calendarUrl ? (
            <Reveal className="flex flex-col gap-3">
              <h3 className="font-display text-lg font-semibold">{t.contact.calendar.title}</h3>
              <CalendarEmbed />
            </Reveal>
          ) : null}
        </div>

        <Reveal>
          <div className="rounded-2xl border border-border bg-card/60 p-6 md:p-8">
            {status === 'success' ? (
              <div role="status" className="flex min-h-[480px] flex-col items-center justify-center gap-4 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <CheckCircle2 aria-hidden="true" className="size-7" />
                </span>
                <h3 className="font-display text-2xl font-semibold">{f.successTitle}</h3>
                <p className="max-w-sm leading-relaxed text-muted-foreground">{f.successMessage}</p>
                <WhatsAppLink />
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label={f.name} error={errors.name?.message}>
                  <Input id="name" autoComplete="name" placeholder={f.placeholders.name} {...aria('name')} {...register('name')} />
                </Field>
                <Field id="email" label={f.email} error={errors.email?.message}>
                  <Input id="email" type="email" autoComplete="email" placeholder={f.placeholders.email} {...aria('email')} {...register('email')} />
                </Field>
                <Field id="company" label={f.company} error={errors.company?.message}>
                  <Input id="company" autoComplete="organization" placeholder={f.placeholders.company} {...aria('company')} {...register('company')} />
                </Field>
                <Field id="investment" label={f.investment} error={errors.investment?.message}>
                  <select id="investment" className={selectClass} {...aria('investment')} {...register('investment')}>
                    <option value="">{f.select}</option>
                    {f.investmentOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </Field>
                <Field id="process" label={f.process} error={errors.process?.message} className="sm:col-span-2">
                  <Textarea id="process" rows={4} placeholder={f.placeholders.process} {...aria('process')} {...register('process')} />
                </Field>

                <div className="flex flex-col gap-3 sm:col-span-2">
                  {status === 'error' ? (
                    <p role="alert" className="text-sm text-destructive">{f.errorGeneric}</p>
                  ) : null}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors outline-none hover:bg-primary/90 focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-60"
                  >
                    {isSubmitting ? <Loader2 aria-hidden="true" className="size-4 animate-spin" /> : null}
                    {isSubmitting ? f.submitting : f.submit}
                  </button>
                  <p className="text-xs leading-relaxed text-muted-foreground">{f.privacy}</p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
