import { Navbar } from '@/components/gadogest/navbar'
import { Hero } from '@/components/gadogest/hero'
import { Problema } from '@/components/gadogest/problema'
import { Solucao } from '@/components/gadogest/solucao'
import { Diferenciais } from '@/components/gadogest/diferenciais'
import { Fazendas } from '@/components/gadogest/fazendas'
import { Equipe } from '@/components/gadogest/equipe'
import { Parceiros } from '@/components/gadogest/parceiros'
import { Contato, Rodape } from '@/components/gadogest/contato'
import { WhatsAppFlutuante } from '@/components/gadogest/whatsapp-flutuante'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Solucao />
        <Diferenciais />
        <Fazendas />
        <Parceiros />
        <Equipe />
        <Contato />
      </main>
      <Rodape />
      <WhatsAppFlutuante />
    </>
  )
}
