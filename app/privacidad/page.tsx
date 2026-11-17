import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = { title: `Política de privacidad · ${siteConfig.name}` }

export default function PrivacyPage() {
  return (
    <LegalPage title="Política de privacidad">
      <p>Última actualización: noviembre de 2026.</p>
      <p>
        En {siteConfig.legalName} respetamos tu privacidad. Esta política explica qué datos recopilamos a
        través de este sitio, para qué los usamos y cómo puedes ejercer tus derechos.
      </p>

      <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Qué datos recopilamos</h2>
      <p>
        Cuando completas el formulario de contacto, recopilamos tu nombre, tu correo electrónico, el nombre de
        tu empresa, el rango de inversión que indicas y la descripción del proceso que quieres automatizar.
        Si nos escribes por WhatsApp, recibimos los datos que compartas en esa conversación, como tu número
        de teléfono.
      </p>

      <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Para qué los usamos</h2>
      <p>
        Usamos tus datos únicamente para responder tu solicitud, proponerte una reunión de diagnóstico y
        mantener la comunicación contigo. No vendemos tus datos ni los usamos para fines ajenos a esta
        relación.
      </p>

      <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Con quién los compartimos</h2>
      <p>
        Podemos usar servicios de terceros para recibir los mensajes del formulario, enviar correos y medir
        el uso del sitio de forma agregada. Estos proveedores solo tratan los datos para prestarnos ese
        servicio. No los compartimos con otras empresas para fines comerciales propios de ellas.
      </p>

      <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Cuánto tiempo los conservamos</h2>
      <p>
        Conservamos tus datos mientras dure la conversación comercial y el tiempo necesario para cumplir
        obligaciones legales. Puedes pedirnos que los eliminemos en cualquier momento.
      </p>

      <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Tus derechos</h2>
      <p>
        Puedes solicitar acceso, rectificación, cancelación u oposición respecto de tus datos personales,
        conforme a la normativa de protección de datos que te sea aplicable (en Perú, la Ley N.° 29733).
        Escríbenos al correo indicado abajo y te responderemos a la brevedad.
      </p>

      <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política cuando sea necesario. La versión vigente siempre estará disponible
        en esta página.
      </p>

      <p>{`Contacto para temas de privacidad: ${siteConfig.email}`}</p>
    </LegalPage>
  )
}
