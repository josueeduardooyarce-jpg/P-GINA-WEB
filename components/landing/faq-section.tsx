'use client'

import { useI18n } from '@/components/i18n-provider'
import { Reveal, Section, SectionHeading } from '@/components/landing/shared'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function FaqSection() {
  const { t } = useI18n()

  return (
    <Section id="faq" labelledBy="faq-title" className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading id="faq-title" eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <Reveal>
          <Accordion className="w-full">
            {t.faq.items.map((item, index) => (
              <AccordionItem key={item.q} value={`faq-${index}`}>
                <AccordionTrigger className="py-5 text-base font-medium hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  )
}
