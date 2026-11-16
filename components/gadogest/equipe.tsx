import { Eyebrow, Reveal } from './reveal'

const time = [
  { nome: 'Carlos Eduardo Souza Carvalho', funcao: 'Gestão / Desenvolvedor', foto: '/img/carlos.webp' },
  { nome: 'Pedro Mariano Brito Vilela', funcao: 'Líder / Desenvolvedor', foto: '/img/pedro.webp' },
  { nome: 'Onesio Rosa da Costa Nunes', funcao: 'Marketing / Desenvolvedor', foto: '/img/onesio.webp' },
  {
    nome: 'Isadora Pereira Prado',
    funcao: 'Médica Veterinária',
    detalhe: 'CRMV-GO 14357',
    foto: '/img/isadora.webp',
  },
]

export function Equipe() {
  return (
    <section id="equipe" className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>O time</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-balance sm:text-5xl">
            Quem está por trás do GadoGest
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cinza sm:text-lg">
            Gestão, tecnologia, comunicação e saúde animal na mesma equipe.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {time.map((p, i) => (
            <Reveal key={p.nome} delay={0.07 * i} className="h-full">
              <div className="flex h-full flex-col items-center rounded-2xl border-t-4 border-pasto bg-white px-3 pb-5 pt-6 text-center shadow-sm sm:px-5">
                <img
                  src={p.foto}
                  alt={`Foto de ${p.nome}`}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="size-24 rounded-full object-cover ring-4 ring-pasto ring-offset-2 ring-offset-white sm:size-32"
                />
                <h3 className="mt-4 font-serif text-base font-bold leading-snug sm:text-lg">{p.nome}</h3>
                <p className="mt-2 rounded-full bg-pasto px-3 py-1 text-xs font-semibold text-white sm:text-sm">
                  {p.funcao}
                </p>
                {p.detalhe && <p className="mt-1.5 text-xs font-semibold text-cinza">{p.detalhe}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
