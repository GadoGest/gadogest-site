'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Solução', href: '#solucao' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Parceiros', href: '#parceiros' },
  { label: 'Equipe', href: '#equipe' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solido = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solido ? 'bg-mata/95 shadow-lg shadow-black/10 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-lg bg-creme p-1">
            <img src="/img/boi-marca.webp" alt="" className="h-full w-full object-contain" />
          </span>
          <span className="font-serif text-xl font-bold text-creme">GadoGest</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-creme/80 transition-colors hover:text-creme"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="ml-2 rounded-full bg-pasto px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#357a43]"
          >
            Fale com a gente
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg text-creme md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-creme"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-pasto px-4 py-3 text-center text-base font-semibold text-white"
          >
            Fale com a gente
          </a>
        </nav>
      )}
    </header>
  )
}
