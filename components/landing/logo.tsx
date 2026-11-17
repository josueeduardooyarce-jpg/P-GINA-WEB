import Image from 'next/image'
import { siteConfig } from '@/lib/site-config'

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/images/logo-icon.webp"
        alt=""
        width={256}
        height={250}
        className="size-9 shrink-0 rounded-lg"
      />
      <span className="font-display text-lg font-semibold tracking-tight">{siteConfig.name}</span>
    </span>
  )
}
