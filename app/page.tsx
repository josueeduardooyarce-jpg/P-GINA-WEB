import { AboutSection } from '@/components/landing/about-section'
import { ContactSection } from '@/components/landing/contact-section'
import { DemosSection } from '@/components/landing/demos-section'
import { FaqSection } from '@/components/landing/faq-section'
import { Hero } from '@/components/landing/hero'
import { ProblemSection } from '@/components/landing/problem-section'
import { ProcessSection } from '@/components/landing/process-section'
import { ScenariosSection } from '@/components/landing/scenarios-section'
import { SecuritySection } from '@/components/landing/security-section'
import { ServicesSection } from '@/components/landing/services-section'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteHeader } from '@/components/landing/site-header'
import { WhatsAppFloat } from '@/components/landing/whatsapp-button'
import { StructuredData } from '@/components/landing/structured-data'

export default function Home() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <DemosSection />
        <ScenariosSection />
        <AboutSection />
        <SecuritySection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
