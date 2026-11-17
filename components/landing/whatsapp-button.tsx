'use client'

import { MessageCircle } from 'lucide-react'
import { useI18n } from '@/components/i18n-provider'
import { whatsappLink } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const baseClass =
  'inline-flex items-center justify-center gap-2 bg-[#25D366] font-medium text-[#07301a] transition-colors outline-none hover:bg-[#2fe173] focus-visible:ring-3 focus-visible:ring-ring/50'

// Enlace a WhatsApp con el mensaje inicial ya escrito (cambia según el idioma).
export function WhatsAppLink({ className }: { className?: string }) {
  const { t } = useI18n()
  return (
    <a
      href={whatsappLink(t.whatsapp.message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseClass, 'h-12 rounded-full px-6 text-sm', className)}
    >
      <MessageCircle aria-hidden="true" className="size-5" />
      {t.whatsapp.cta}
    </a>
  )
}

// Botón flotante abajo a la derecha, visible en toda la página.
export function WhatsAppFloat() {
  const { t } = useI18n()
  return (
    <a
      href={whatsappLink(t.whatsapp.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.label}
      className={cn(
        baseClass,
        'fixed right-4 bottom-4 z-40 size-14 rounded-full shadow-lg shadow-black/30 md:right-6 md:bottom-6',
      )}
    >
      <MessageCircle aria-hidden="true" className="size-7" />
    </a>
  )
}
