import { ArrowRight, Network, Tractor, TrendingUp } from 'lucide-react'
import { MENSAGENS, linkWhatsApp } from '@/lib/contato'
import { Eyebrow, Reveal } from './reveal'

// Números do mercado: pitch final (IBGE, CNA/Cepea e Abiec, 2025)
const mercado = [
  {
    regiao: 'Brasil',
    cor: 'bg-broto',
    itens: [
      { valor: '234,3 mi', texto: 'de cabeças de gado em 2025' },
      { valor: '42,9 mi', texto: 'de bovinos abatidos em 2025 (recorde)' },
    ],
  },
  {
    regiao: 'Goiás',
    cor: 'bg-areia',
    itens: [
      { valor: '22,5 mi', texto: 'de cabeças: 3º maior rebanho do país' },
      { valor: '9,9%', texto: 'do abate nacional: 3º do país' },
    ],
  },
]

const caminhos = [
  {
    icone: TrendingUp,
    titulo: 'Investimento',
    texto: 'Estamos captando investimento para levar o GadoGest do protótipo ao mercado. Apresentamos o plano de negócio e as condições em uma conversa individual.',
    botao: 'Quero investir',
    mensagem: MENSAGENS.investimento,
  },
  {
    icone: Tractor,
    titulo: 'Fazenda piloto',
    texto: 'Use o GadoGest na sua fazenda durante a validação e ajude a construir o sistema com a gente.',
    botao: 'Quero ser fazenda piloto',
    mensagem: MENSAGENS.piloto,
  },
  {
    icone: Network,
    titulo: 'Distribuição',
    texto: 'Seja um parceiro GadoGest e leve o sistema aos produtores da sua rede.',
    botao: 'Quero distribuir',
    mensagem: MENSAGENS.distribuicao,
  },
]

export function Parceiros() {
  return (
    <section id="parceiros" className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
      <div className="pointer-events-none absolute -right-20 -top-16 size-64 rounded-full bg-[#dfe6d8]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <Eyebrow>Parceiros GadoGest</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-balance sm:text-5xl">
              Um rebanho gigante pedindo uma gestão à altura.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cinza sm:text-lg">
              Estamos abertos a investidores, fazendas piloto e parceiros de distribuição para levar o
              GadoGest a mais produtores.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-3 sm:grid-cols-2">
              {mercado.map((m) => (
                <div key={m.regiao} className={`rounded-2xl p-6 ${m.cor}`}>
                  <p className="text-lg font-bold text-mata">{m.regiao}</p>
                  {m.itens.map((it) => (
                    <div key={it.valor} className="mt-4">
                      <p className="font-serif text-4xl font-bold leading-none text-mata sm:text-[2.6rem]">
                        {it.valor}
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-snug text-mata/90">{it.texto}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-2xl border-l-4 border-couro bg-white px-5 py-4 text-sm font-semibold leading-relaxed text-mata shadow-sm">
              Agronegócio: 25,13% do PIB do Brasil em 2025. Exportação de carne bovina: recorde de 3,5
              mi de toneladas em 2025 (+20,9%).
            </div>
            <p className="mt-2 text-xs text-cinza">
              Fontes: IBGE (rebanho e abate, 2025); CNA/Cepea (2025); Abiec (exportações, 2025).
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <h3 className="font-serif text-2xl font-bold sm:text-3xl">Como participar</h3>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {caminhos.map((c, i) => (
            <Reveal key={c.titulo} delay={0.08 * i} className="h-full">
              <div className="flex h-full flex-col rounded-2xl bg-mata p-6 text-creme">
                <span className="flex size-12 items-center justify-center rounded-full bg-pasto">
                  <c.icone className="size-6 text-white" />
                </span>
                <h4 className="mt-4 text-xl font-bold">{c.titulo}</h4>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-creme/80">{c.texto}</p>
                <a
                  href={linkWhatsApp(c.mensagem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-pasto px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#357a43]"
                >
                  {c.botao}
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
