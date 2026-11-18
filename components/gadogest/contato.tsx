'use client'

import { useState } from 'react'
import { Check, Copy, Handshake, Mail, MessageCircle } from 'lucide-react'
import { EMAIL, MENSAGENS, WHATSAPP_EXIBIR, linkGmail, linkWhatsApp } from '@/lib/contato'
import { Eyebrow, Reveal } from './reveal'

export function Contato() {
  const [copiado, setCopiado] = useState(false)
  const [avisoEmail, setAvisoEmail] = useState(false)

  // O botão abre direto o Gmail (nova aba) com destinatário e assunto preenchidos.
  // Para quem usa outro e-mail, o endereço também é copiado e aparece um aviso.
  async function contatoEmail() {
    setAvisoEmail(true)
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      /* se a cópia for bloqueada, o aviso ainda mostra o endereço */
    }
  }

  async function copiar() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      /* alguns navegadores bloqueiam a cópia; o e-mail continua visível */
    }
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-mata text-creme">
      <div className="mx-auto grid max-w-6xl md:grid-cols-[1.2fr_1fr]">
        <div className="px-4 py-16 sm:px-6 md:py-24 md:pr-12">
          <Reveal>
            <Eyebrow claro>Vamos conversar</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-balance sm:text-5xl">
              Quer saber mais sobre o GadoGest?
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-creme/85">
              Queremos aproximar a tecnologia da realidade do campo, ajudando pequenos e médios
              produtores a organizar o cuidado com o rebanho e a tomar decisões melhores.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-creme/70">
              Chame a gente no WhatsApp. Respondemos e avisamos quando o lançamento estiver
              próximo.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-broto">
              Fale com a gente no WhatsApp
            </p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={linkWhatsApp(MENSAGENS.produtor)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pasto px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-[#357a43]"
              >
                <img src="/img/boi-icone.png" alt="" width={144} height={100} className="h-6 w-auto" />
                Sou produtor
              </a>
              <a
                href={linkWhatsApp(MENSAGENS.parceiro)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pasto px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-[#357a43]"
              >
                <Handshake className="size-5" />
                Sou investidor ou parceiro
              </a>
            </div>
            <a
              href={linkGmail()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={contatoEmail}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-creme/30 px-7 py-3.5 text-base font-semibold text-creme transition-colors hover:bg-creme/10 sm:w-auto"
            >
              <Mail className="size-5" />
              Contato pelo e-mail
            </a>
            {avisoEmail && (
              <p role="status" className="mt-3 max-w-lg text-sm leading-relaxed text-creme/80">
                O Gmail foi aberto em uma nova aba. Usa outro e-mail? O endereço{' '}
                <strong className="text-creme">{EMAIL}</strong> já foi copiado, é só colar.
              </p>
            )}
          </Reveal>

          <Reveal delay={0.15} className="mt-6 space-y-2 text-base text-creme/80">
            <p className="flex items-center gap-2">
              <MessageCircle className="size-5 shrink-0 text-broto" />
              <a
                href={linkWhatsApp(MENSAGENS.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-creme hover:underline"
              >
                {WHATSAPP_EXIBIR}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="size-5 shrink-0 text-broto" />
              <span>{EMAIL}</span>
              <button
                type="button"
                onClick={copiar}
                aria-label="Copiar e-mail"
                className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-sm text-creme/70 transition-colors hover:bg-creme/10 hover:text-creme"
              >
                {copiado ? <Check className="size-4 text-broto" /> : <Copy className="size-4" />}
                {copiado ? 'Copiado!' : 'Copiar'}
              </button>
            </p>
          </Reveal>
        </div>

        {/* No celular a foto fica abaixo do texto; no computador ela ocupa o lado direito até a borda da tela */}
        <Reveal className="h-full md:absolute md:inset-y-0 md:left-[54.55%] md:right-0 min-[1152px]:left-[calc(50%+52px)]">
          <img
            src="/img/equipe-pasto.webp"
            alt="Equipe GadoGest reunida no campo ao entardecer"
            width={1040}
            height={1600}
            loading="lazy"
            className="h-80 w-full object-cover object-[center_60%] sm:h-[28rem] md:h-full"
          />
        </Reveal>
      </div>
    </section>
  )
}

export function Rodape() {
  return (
    <footer className="bg-[#0d2620] px-4 py-10 text-creme/70 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-creme p-1">
            <img src="/img/boi-marca.webp" alt="" className="h-full w-full object-contain" />
          </span>
          <div>
            <p className="font-serif text-lg font-bold text-creme">GadoGest</p>
            <p className="text-sm">Sistema de gestão de gado de corte</p>
          </div>
        </div>
        <div className="space-y-1 text-sm md:text-right">
          <p>O GadoGest organiza os registros e não substitui o médico-veterinário.</p>
          <p>© {new Date().getFullYear()} GadoGest. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
