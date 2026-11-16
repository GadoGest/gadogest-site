import { Check, HeartPulse, Smartphone, Users, WifiOff, X } from 'lucide-react'
import { Eyebrow, Reveal } from './reveal'

const itens = [
  {
    icone: HeartPulse,
    titulo: 'Saúde animal em primeiro lugar',
    texto: 'Sanidade integrada ao acompanhamento de peso, manejo e custos.',
  },
  {
    icone: WifiOff,
    titulo: 'Modo offline previsto',
    texto: 'Para registrar no curral, mesmo sem sinal, e sincronizar quando a conexão voltar.',
  },
  {
    icone: Smartphone,
    titulo: 'Simples de usar',
    texto: 'Interface intuitiva e de fácil aprendizado, sem complicar a rotina.',
  },
  {
    icone: Users,
    titulo: 'Para pequenos e médios',
    texto: 'Pensado para a realidade de quem produz gado de corte, sem excesso de recursos.',
  },
]

const comparacao = [
  { criterio: 'Histórico sanitário', antes: 'Espalhado em vários lugares', gadogest: 'Reunido em um só lugar' },
  { criterio: 'Vacinas e datas', antes: 'Risco de esquecer', gadogest: 'Registradas com data' },
  { criterio: 'Próximos manejos', antes: 'Controle manual', gadogest: 'Organizados no painel' },
  { criterio: 'Peso, saúde e custos', antes: 'Em arquivos separados', gadogest: 'Juntos no mesmo sistema' },
  { criterio: 'Uso no curral', antes: 'Anota no papel, digita depois', gadogest: 'Registro offline previsto' },
]

export function Diferenciais() {
  return (
    <section id="diferenciais" className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
      <div className="pointer-events-none absolute -right-20 -top-16 size-64 rounded-full bg-[#dfe6d8]" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>Por que o GadoGest</Eyebrow>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-tight text-balance sm:text-5xl">
            Preço claro, com a saúde do rebanho em primeiro lugar.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1.5fr]">
          <Reveal className="h-full">
            <div className="flex h-full flex-col justify-center rounded-2xl bg-pasto p-7 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                Mensalidade prevista
              </p>
              <p className="mt-2 font-serif text-6xl font-bold leading-none text-mata">
                R$&nbsp;89,90
              </p>
              <p className="mt-2 text-lg font-semibold text-mata">por mês</p>
              <p className="mt-4 rounded-xl bg-mata/15 px-4 py-3 text-[15px] leading-relaxed text-white">
                <strong className="font-semibold">+ taxa de implantação</strong>, calculada para
                cada fazenda conforme a localização e o deslocamento da equipe.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-white/90">
                A mensalidade é fixa e aberta para todos. O GadoGest está em fase de protótipo e
                validação, ainda não disponível para assinatura.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {itens.map((item, i) => (
              <Reveal key={item.titulo} delay={0.06 * i} className="h-full">
                <div className="h-full rounded-2xl border-l-4 border-couro bg-white p-5 shadow-sm">
                  <item.icone className="size-6 text-pasto" />
                  <h3 className="mt-3 text-lg font-bold">{item.titulo}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-cinza">{item.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-14">
          <h3 className="font-serif text-2xl font-bold sm:text-3xl">
            GadoGest frente ao caderno e à planilha
          </h3>
        </Reveal>

        <div className="mt-6 hidden overflow-hidden rounded-2xl bg-white shadow-sm md:block">
          <div className="grid grid-cols-3 bg-areia text-sm font-bold">
            <div className="px-5 py-3">Critério</div>
            <div className="px-5 py-3">Caderno e planilha</div>
            <div className="bg-broto px-5 py-3">GadoGest</div>
          </div>
          {comparacao.map((linha) => (
            <div key={linha.criterio} className="grid grid-cols-3 border-t border-border text-[15px]">
              <div className="px-5 py-3.5 font-semibold">{linha.criterio}</div>
              <div className="flex items-center gap-2 px-5 py-3.5 text-cinza">
                <X className="size-4 shrink-0 text-couro" /> {linha.antes}
              </div>
              <div className="flex items-center gap-2 bg-[#eef7ef] px-5 py-3.5 font-semibold">
                <Check className="size-4 shrink-0 text-pasto" /> {linha.gadogest}
              </div>
            </div>
          ))}
        </div>

        {/* versão para celular */}
        <div className="mt-6 space-y-3 md:hidden">
          {comparacao.map((linha) => (
            <div key={linha.criterio} className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="font-bold">{linha.criterio}</p>
              <p className="mt-2 flex gap-2 text-[15px] text-cinza">
                <X className="mt-0.5 size-4 shrink-0 text-couro" /> {linha.antes}
              </p>
              <p className="mt-1.5 flex gap-2 text-[15px] font-semibold">
                <Check className="mt-0.5 size-4 shrink-0 text-pasto" /> {linha.gadogest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
