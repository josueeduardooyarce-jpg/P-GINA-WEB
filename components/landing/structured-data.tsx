import { es } from '@/lib/i18n/es'
import { siteConfig } from '@/lib/site-config'

export function StructuredData() {
  const organizationId = `${siteConfig.url}/#organization`
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon.png`,
        email: siteConfig.email,
        areaServed: 'Worldwide',
      },
      ...es.services.items.map((service) => ({
        '@type': 'Service',
        name: service.title,
        description: service.description,
        serviceType: 'Automatización de procesos con IA',
        provider: { '@id': organizationId },
        areaServed: 'Worldwide',
      })),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
