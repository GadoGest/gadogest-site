'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'

type Tela = {
  id: string
  titulo: string
  texto: string
  w: number
  h: number
  /** miniatura usada no carrossel (o painel usa a versão média) */
  mini?: { w: number; h: number }
}

// Telas do sistema (dados de exemplo)
const TELAS: Tela[] = [
  {
    id: 'painel',
    titulo: 'Painel inicial',
    texto: 'O resumo da fazenda em uma tela: rebanho, vacinação, peso médio, saldo do mês e próximos manejos.',
    w: 1536,
    h: 1024,
  },
  {
    id: 'animais',
    titulo: 'Animais',
    texto: 'Lista do rebanho com brinco, categoria, lote, peso e situação sanitária de cada animal.',
    w: 1536,
    h: 1024,
    mini: { w: 480, h: 320 },
  },
  {
    id: 'ficha-animal',
    titulo: 'Ficha do animal',
    texto: 'Tudo sobre um animal: dados, peso, histórico sanitário e próximos manejos.',
    w: 1536,
    h: 1024,
    mini: { w: 480, h: 320 },
  },
  {
    id: 'saude-animal',
    titulo: 'Saúde animal',
    texto: 'Vacinas, tratamentos e o calendário de manejos sanitários do rebanho.',
    w: 1536,
    h: 1024,
    mini: { w: 480, h: 320 },
  },
  {
    id: 'financeiro',
    titulo: 'Financeiro',
    texto: 'Receitas, despesas e saldo do mês, com o detalhamento por categoria.',
    w: 1536,
    h: 1024,
    mini: { w: 480, h: 320 },
  },
]

const grande = (t: Tela) => `/img/telas/${t.id}.webp`

export function TelasCarrossel() {
  const [aberta, setAberta] = useState<number | null>(null)
  const [zoom, setZoom] = useState(false)
  const fecharRef = useRef<HTMLButtonElement>(null)
  const voltarFocoRef = useRef<HTMLElement | null>(null)
  const toqueRef = useRef<number | null>(null)

  const abrir = (i: number, origem: HTMLElement) => {
    voltarFocoRef.current = origem
    setZoom(false)
    setAberta(i)
  }
  const fechar = useCallback(() => {
    setAberta(null)
    setZoom(false)
    voltarFocoRef.current?.focus()
  }, [])
  const ir = useCallback((passo: number) => {
    setZoom(false)
    setAberta((atual) => (atual === null ? atual : (atual + passo + TELAS.length) % TELAS.length))
  }, [])

  // teclado, trava a rolagem da página e foco no botão de fechar
  useEffect(() => {
    if (aberta === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fechar()
      if (e.key === 'ArrowRight') ir(1)
      if (e.key === 'ArrowLeft') ir(-1)
    }
    window.addEventListener('keydown', onKey)
    const antes = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    fecharRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = antes
    }
  }, [aberta, fechar, ir])

  const tela = aberta === null ? null : TELAS[aberta]
  const partes = TELAS.slice(1)

  return (
    <div>
      {/* Painel completo */}
      <button
        type="button"
        onClick={(e) => abrir(0, e.currentTarget)}
        className="group relative block w-full overflow-hidden rounded-2xl bg-white text-left shadow-2xl shadow-black/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-broto"
        aria-label="Ampliar o painel inicial do sistema"
      >
        <img
          src="/img/telas/painel-medio.webp"
          alt="Painel inicial do GadoGest com indicadores, status sanitário, próximos manejos e gráficos"
          width={1000}
          height={667}
          loading="lazy"
          className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-mata/90 px-3 py-1.5 text-sm font-semibold text-creme shadow-lg">
          <Maximize2 className="size-4" />
          Toque para ampliar
        </span>
      </button>

      {/* Partes da tela */}
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-broto">
        Veja as outras telas
      </p>
      <p className="mt-1 text-sm leading-relaxed text-creme/70">
        Arraste para o lado para ver todas as telas. Toque em uma para ampliar e, na tela cheia,
        deslize ou use as setas para passar para a próxima.
      </p>
      <ul className="-mx-4 mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 [scrollbar-width:thin] sm:mx-0 sm:px-0">
        {partes.map((t, i) => (
          <li key={t.id} className="w-56 shrink-0 snap-start sm:w-60">
            <button
              type="button"
              onClick={(e) => abrir(i + 1, e.currentTarget)}
              className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-broto"
            >
              <span className="flex h-32 items-center justify-center overflow-hidden rounded-xl bg-[#f3f3f0] p-2">
                <img
                  src={`/img/telas/${t.id}-mini.webp`}
                  alt=""
                  width={t.mini?.w}
                  height={t.mini?.h}
                  loading="lazy"
                  className="max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </span>
              <span className="mt-2 flex items-center justify-between gap-2 text-[15px] font-semibold text-creme">
                {t.titulo}
                <Maximize2 className="size-4 shrink-0 text-broto" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Tela cheia */}
      {tela && aberta !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${tela.titulo}, ${aberta + 1} de ${TELAS.length}`}
          className="fixed inset-0 z-[70] flex flex-col bg-[#081a15]/95 text-creme backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) fechar()
          }}
          onTouchStart={(e) => {
            toqueRef.current = e.touches[0].clientX
          }}
          onTouchEnd={(e) => {
            const inicio = toqueRef.current
            toqueRef.current = null
            if (zoom || inicio === null || e.touches.length > 0) return
            const dx = e.changedTouches[0].clientX - inicio
            if (Math.abs(dx) > 50) ir(dx < 0 ? 1 : -1)
          }}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <span className="text-sm text-creme/70">
              {aberta + 1} / {TELAS.length}
            </span>
            <button
              ref={fecharRef}
              type="button"
              onClick={fechar}
              aria-label="Fechar"
              className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <X className="size-6" />
            </button>
          </div>

          <div
            className={`relative flex min-h-0 flex-1 px-3 sm:px-16 ${
              zoom ? 'items-start justify-start overflow-auto' : 'items-center justify-center'
            }`}
            onClick={(e) => {
              if (e.target === e.currentTarget) fechar()
            }}
          >
            {/* Toque na imagem: alterna zoom (no zoom, arraste para ver os detalhes) */}
            <img
              key={tela.id}
              src={grande(tela)}
              alt={`${tela.titulo}: ${tela.texto}`}
              width={tela.w}
              height={tela.h}
              onClick={() => setZoom((z) => !z)}
              style={
                zoom
                  ? { width: `${Math.max(tela.w, 1100)}px`, maxWidth: 'none', maxHeight: 'none' }
                  : { width: `min(100%, ${tela.w * 2}px)`, maxHeight: '100%' }
              }
              className={`h-auto shrink-0 rounded-xl bg-white object-contain shadow-2xl ${
                zoom ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
            />
            <button
              type="button"
              onClick={() => ir(-1)}
              aria-label="Tela anterior"
              className="absolute left-2 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 sm:inline-flex"
            >
              <ChevronLeft className="size-7" />
            </button>
            <button
              type="button"
              onClick={() => ir(1)}
              aria-label="Próxima tela"
              className="absolute right-2 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 sm:inline-flex"
            >
              <ChevronRight className="size-7" />
            </button>
          </div>

          <div className="mx-auto w-full max-w-2xl px-5 pb-6 pt-4 text-center">
            <p className="font-serif text-2xl font-bold">{tela.titulo}</p>
            <p className="mt-1 text-[15px] leading-relaxed text-creme/80">{tela.texto}</p>
            <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
              <button
                type="button"
                onClick={() => ir(-1)}
                aria-label="Tela anterior"
                className="inline-flex size-12 items-center justify-center rounded-full bg-white/10"
              >
                <ChevronLeft className="size-7" />
              </button>
              <span className="text-sm text-creme/60">
                {zoom ? 'toque na imagem para voltar' : 'toque na imagem para dar zoom'}
              </span>
              <button
                type="button"
                onClick={() => ir(1)}
                aria-label="Próxima tela"
                className="inline-flex size-12 items-center justify-center rounded-full bg-white/10"
              >
                <ChevronRight className="size-7" />
              </button>
            </div>
            <p className="mt-3 text-xs text-creme/50">
              <span className="hidden sm:inline">Clique na imagem para dar zoom · </span>
              Sistema em desenvolvimento · dados de exemplo
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
