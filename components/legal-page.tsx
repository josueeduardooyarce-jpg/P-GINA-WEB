import { ArrowLeft } from 'lucide-react'

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-20 md:px-8">
      <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft aria-hidden="true" className="size-4" />
        Volver al inicio
      </a>
      <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight">{title}</h1>
      <div className="mt-8 flex flex-col gap-4 leading-relaxed text-muted-foreground">{children}</div>
    </main>
  )
}
