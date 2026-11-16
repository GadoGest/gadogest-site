'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { MENSAGENS, linkWhatsApp } from '@/lib/contato'

/**
 * Botão de WhatsApp fixo no canto da tela.
 * Aparece depois que a pessoa começa a rolar e some na seção de contato,
 * onde os botões completos já estão visíveis.
 */
export function WhatsAppFlutuante() {
  const [rolou, setRolou] = useState(false)
  const [noContato, setNoContato] = useState(false)

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const contato = document.getElementById('contato')
    let observer: IntersectionObserver | undefined
    if (contato && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entrada]) => setNoContato(entrada.isIntersecting), {
        threshold: 0.15,
      })
      observer.observe(contato)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer?.disconnect()
    }
  }, [])

  const visivel = rolou && !noContato

  return (
    <a
      href={linkWhatsApp(MENSAGENS.geral)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o GadoGest no WhatsApp"
      aria-hidden={!visivel}
      tabIndex={visivel ? 0 : -1}
      className={`fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-pasto py-3.5 pl-4 pr-5 text-base font-semibold text-white shadow-lg shadow-black/25 ring-2 ring-white/70 transition-all duration-300 hover:bg-[#357a43] sm:bottom-6 sm:right-6 ${
        visivel ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <MessageCircle className="size-6" />
      WhatsApp
    </a>
  )
}
