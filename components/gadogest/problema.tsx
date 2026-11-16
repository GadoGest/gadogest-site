import { ArrowDown, ArrowRight, Check, X } from 'lucide-react'
import { Eyebrow, Reveal } from './reveal'

const antes = [
  'Cadernos, planilhas e anotações separados',
  'Histórico de vacinas difícil de consultar',
  'Risco de esquecer datas de manejo',
  'Evolução do peso pouco visível',
]

const depois = [
  'Histórico sanitário em um só lugar',
  'Vacinas, tratamentos e pesagens',
  'Próximos manejos organizados',
  'Custos junto ao rebanho',
]

export function Problema() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
      <div className="pointer-events-none absolute -right-20 -top-16 size-64 rounded-full bg-[#dfe6d8]" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>O problema no campo</Eyebrow>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-tight text-balance sm:text-5xl">
            Cuidar do rebanho exige mais do que experiência: exige informação.
          </h2>
        </Reveal>

        <div className="mt-10 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6">
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border-t-4 border-couro bg-areia p-6 sm:p-7">
              <h3 className="text-xl font-bold">Registros dispersos</h3>
              <ul className="mt-4 space-y-3">
                {antes.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-snug">
                    <X className="mt-0.5 size-5 shrink-0 text-couro" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-pasto text-white">
            <ArrowDown className="size-5 md:hidden" />
            <ArrowRight className="hidden size-5 md:block" />
          </div>

          <Reveal delay={0.1} className="h-full">
            <div className="h-full rounded-2xl border-t-4 border-broto bg-mata p-6 text-creme sm:p-7">
              <h3 className="text-xl font-bold">Gestão centralizada com o GadoGest</h3>
              <ul className="mt-4 space-y-3">
                {depois.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-snug">
                    <Check className="mt-0.5 size-5 shrink-0 text-broto" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
