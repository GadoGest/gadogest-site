import { Eyebrow, Reveal } from './reveal'

const tags = [
  { texto: 'Vivência no campo', cor: 'bg-pasto text-white' },
  { texto: 'Rebanho', cor: 'bg-pasto text-white' },
  { texto: 'Aprendizado', cor: 'bg-couro text-white' },
]

export function Fazendas() {
  return (
    <section className="relative overflow-hidden bg-mata px-4 py-16 text-creme sm:px-6 md:py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-mata-2" />
      <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <Reveal>
          <Eyebrow claro>Experiência prática</Eyebrow>
          <p className="mt-4 font-serif text-7xl font-bold leading-[0.95] sm:text-8xl">12</p>
          <p className="font-serif text-5xl font-bold tracking-wide sm:text-7xl">FAZENDAS</p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-creme/85">
            Atividades técnicas de controle da saúde animal e acompanhamento do peso do rebanho, que
            também serviram de teste e validação do GadoGest.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t.texto} className={`rounded-full px-4 py-2 text-sm font-semibold ${t.cor}`}>
                {t.texto}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
          <Reveal>
            <img
              src="/img/fazenda-1.webp"
              alt="Animal no tronco de contenção durante atividade em fazenda"
              width={1000}
              height={573}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover md:aspect-[16/9]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src="/img/curral-manejo.webp"
              alt="Equipe realizando manejo sanitário no curral"
              width={823}
              height={607}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover md:aspect-[16/9]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
