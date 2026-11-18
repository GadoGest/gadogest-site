// Contatos do GadoGest, usados no site inteiro

export const EMAIL = 'contato@gadogest.com.br'
export const ASSUNTO_EMAIL = encodeURIComponent('Quero saber mais sobre o GadoGest')

export const WHATSAPP_EXIBIR = '(66) 99918-7247'
const WHATSAPP_NUMERO = '5566999187247' // formato internacional para o link wa.me

/** Link do WhatsApp com uma mensagem já escrita */
export function linkWhatsApp(mensagem: string) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`
}

/** Tela de novo e-mail do Gmail (no navegador), já com destinatário e assunto */
export function linkGmail() {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${ASSUNTO_EMAIL}`
}

export const MENSAGENS = {
  geral: 'Olá! Vi o site do GadoGest e quero saber mais.',
  produtor: 'Olá! Sou produtor e quero saber mais sobre o GadoGest.',
  parceiro: 'Olá! Tenho interesse em investir ou firmar uma parceria com o GadoGest. Podemos agendar uma conversa?',
  investimento: 'Olá! Tenho interesse em investir no GadoGest e gostaria de conversar.',
  piloto: 'Olá! Quero que minha fazenda seja piloto do GadoGest.',
  distribuicao: 'Olá! Quero ser parceiro GadoGest e levar o sistema aos produtores da minha rede.',
} as const
