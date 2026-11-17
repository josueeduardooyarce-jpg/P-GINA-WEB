import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = { title: `Términos y condiciones · ${siteConfig.name}` }

export default function TermsPage() {
  return (
    <LegalPage title="Términos y condiciones">
      <p>Última actualización: noviembre de 2026.</p>
      <p>
        Al usar este sitio aceptas estos términos. Si no estás de acuerdo con ellos, te pedimos que no uses
        el sitio.
      </p>

      <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Sobre el sitio</h2>
      <p>
        Este sitio presenta los servicios de automatización con inteligencia artificial de
        {' '}{siteConfig.legalName}. La información publicada es de carácter informativo y no constituye
        una oferta vinculante.
      </p>

      <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Contratación de servicios</h2>
      <p>
        El alcance, los plazos, el precio y las condiciones de cada proyecto se definen por escrito en una
        propuesta o contrato firmado entre las partes. Una solicitud de diagnóstico o una conversación por
        WhatsApp no obliga a ninguna de las partes a contratar.
      </p>

      <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Propiedad intelectual</h2>
      <p>
        Los textos, el diseño, el logotipo y demás contenidos de este sitio pertenecen a
        {' '}{siteConfig.legalName} y no pueden usarse sin autorización previa. La titularidad de lo que
        construimos para cada cliente se establece en el contrato de cada proyecto.
      </p>

      <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Uso adecuado</h2>
      <p>
        Te comprometes a usar el sitio de forma lícita y a no enviar información falsa, ofensiva o que
        afecte el funcionamiento del sitio o los derechos de terceros.
      </p>

      <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Limitación de responsabilidad</h2>
      <p>
        Nos esforzamos por mantener el sitio actualizado y disponible, pero no garantizamos que esté libre
        de errores o interrupciones. Los ejemplos y demostraciones mostrados son ilustrativos y no
        representan resultados garantizados.
      </p>

      <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Enlaces a terceros</h2>
      <p>
        El sitio puede enlazar a servicios externos, como WhatsApp. No controlamos esos servicios y no somos
        responsables de sus políticas ni de su contenido.
      </p>

      <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia se someterá a
        los tribunales competentes, salvo que el contrato de un proyecto establezca otra cosa.
      </p>

      <p>{`Consultas: ${siteConfig.email}`}</p>
    </LegalPage>
  )
}
