import { HeartPulse } from 'lucide-react'
import { Eyebrow, Reveal } from './reveal'
import { TelasCarrossel } from './telas-carrossel'

const modulos = [
  {
    n: 2,
    titulo: 'Desenvolvimento',
    texto: 'Pesagens, ganho de peso e histórico por animal ou lote.',
  },
  {
    n: 3,
    titulo: 'Reprodução e manejo',
    texto: 'Informações reprodutivas e organização das atividades.',
  },
  {
    n: 4,
    titulo: 'Gestão financeira',
    texto: 'Custos, despesas e apoio à análise de resultados.',
  },
]

const passos = [
  { titulo: 'Registrar', texto: 'Animal ou lote e as informações do rebanho.' },
  { titulo: 'Acompanhar', texto: 'Vacinas, tratamentos, pesagens e histórico sanitário.' },
  { titulo: 'Analisar', texto: 'Painel, próximos manejos e evolução do peso.' },
]

export function Solucao() {
  return (
    <>
      <section id="solucao" className="px-4 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>A solução</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-balance sm:text-5xl">
              A gestão da fazenda em um só lugar.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-cinza sm:text-lg">
              Um painel integrado para pequenos e médios produtores de gado de corte, com a saúde do
              rebanho no centro de tudo.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-mata p-6 text-creme sm:flex-row sm:items-center sm:p-8">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-pasto">
                <HeartPulse className="size-7 text-white" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-broto">
                  Foco principal
                </p>
                <h3 className="mt-1 text-2xl font-bold">Saúde e sanidade animal</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-creme/80">
                  Histórico sanitário · vacinação e datas · medicamentos e tratamentos · ocorrências e
                  procedimentos · próximos manejos · consulta por animal ou lote
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {modulos.map((m, i) => (
              <Reveal key={m.n} delay={0.08 * (i + 1)} className="h-full">
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                  <span className="flex size-10 items-center justify-center rounded-full bg-couro font-bold text-white">
                    {m.n}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{m.titulo}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-cinza">{m.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mata px-4 py-16 text-creme sm:px-6 md:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-mata-2" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow claro>O sistema GadoGest · em desenvolvimento</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-balance sm:text-5xl">
              Simples para registrar. Prático para acompanhar.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <Reveal className="min-w-0">
              <TelasCarrossel />
              <p className="mt-2 text-sm text-creme/60">
                Telas do sistema em desenvolvimento · dados de exemplo
              </p>
            </Reveal>

            <ol className="space-y-3">
              {passos.map((p, i) => (
                <Reveal key={p.titulo} delay={0.1 * i}>
                  <li className="rounded-2xl border-l-4 border-pasto bg-mata-2 p-5">
                    <p className="text-xl font-bold text-broto">
                      {i + 1} · {p.titulo}
                    </p>
                    <p className="mt-1 text-[15px] leading-relaxed text-creme/85">{p.texto}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}
