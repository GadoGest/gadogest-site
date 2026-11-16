import { ArrowRight, BadgeCheck, MessageCircle, WifiOff } from 'lucide-react'
import { MENSAGENS, linkWhatsApp } from '@/lib/contato'

/*
 * Animação de entrada feita em CSS (globals.css): roda assim que a página chega,
 * sem esperar o JavaScript. Assim o título aparece rápido mesmo com internet lenta.
 */
function Surgir({
  children,
  delay = 0,
  className = '',
  lado,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  lado?: 'esq' | 'dir'
}) {
  const anim = lado === 'esq' ? 'surgir-esq' : lado === 'dir' ? 'surgir-dir' : 'surgir'
  return (
    <div className={`${anim} ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-mata text-creme">
      {/* círculo decorativo, como nos slides */}
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-mata-2 md:size-[28rem]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-24 sm:px-6 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12 md:pb-20 md:pt-32">
        <div>
          <Surgir>
            <div className="inline-flex rounded-2xl bg-creme px-5 py-3 shadow-xl shadow-black/20">
              <img
                src="/img/logo.webp"
                alt="GadoGest: sistema de gestão de gado de corte"
                width={360}
                height={268}
                className="h-20 w-auto sm:h-24"
                fetchPriority="high"
              />
            </div>
          </Surgir>

          <Surgir delay={0.1}>
            <h1 className="mt-7 font-serif text-[2.6rem] font-bold leading-[1.05] text-balance sm:text-6xl">
              Onde a eficiência vira arroba.
            </h1>
          </Surgir>

          <Surgir delay={0.18}>
            <p className="mt-4 font-serif text-lg italic text-broto sm:text-xl">
              &ldquo;Inteligência no manejo, precisão no resultado.&rdquo;
            </p>
          </Surgir>

          <Surgir delay={0.26}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-creme/80 sm:text-lg">
              Sistema de gestão de gado de corte para pequenos e médios produtores. Saúde animal,
              pesagens, manejo e custos em um só lugar, com modo offline previsto para o curral.
            </p>
          </Surgir>

          <Surgir delay={0.34} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#solucao"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-pasto px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#357a43]"
            >
              Conheça a solução
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={linkWhatsApp(MENSAGENS.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-creme/30 px-7 py-3.5 text-base font-semibold text-creme transition-colors hover:bg-creme/10"
            >
              <MessageCircle className="size-5" />
              Fale com a gente
            </a>
          </Surgir>
        </div>

        <Surgir delay={0.2} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-black/30 md:aspect-[4/5]">
            <img
              src="/img/curral-hero.webp"
              alt="Animal no tronco de contenção durante manejo em uma das fazendas visitadas"
              className="zoom-lento h-full w-full object-cover object-[center_40%]"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mata/50 via-transparent to-transparent" />
          </div>

          <Surgir lado="esq" delay={0.7} className="absolute -bottom-4 left-3 sm:-left-5">
            <div className="flutuar flex items-center gap-3 rounded-2xl bg-creme px-4 py-3 text-tinta shadow-xl">
              <BadgeCheck className="size-6 text-pasto" />
              <div className="leading-tight">
                <p className="font-serif text-lg font-bold">12 fazendas</p>
                <p className="text-xs text-cinza">validação em campo</p>
              </div>
            </div>
          </Surgir>

          <Surgir lado="dir" delay={0.85} className="absolute right-3 top-3 sm:-right-4 sm:top-8">
            <div className="flutuar flex items-center gap-2 rounded-full bg-pasto px-4 py-2 text-sm font-semibold text-white shadow-lg [animation-delay:1.2s]">
              <WifiOff className="size-4" />
              Modo offline previsto
            </div>
          </Surgir>
        </Surgir>
      </div>
    </section>
  )
}
