# GadoGest — site

Site institucional do **GadoGest**, sistema de gestão de gado de corte para pequenos e médios produtores.

No ar em **[www.gadogest.com.br](https://www.gadogest.com.br)**.

## Tecnologias

- [Next.js](https://nextjs.org) (App Router) com React e TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- Fontes Inter e Gelasio hospedadas no próprio site (`app/fonts`)
- Hospedagem e publicação na [Vercel](https://vercel.com)

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois abra [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura

| Caminho | Conteúdo |
|---|---|
| `app/page.tsx` | Monta a página, na ordem das seções |
| `app/layout.tsx` | Título, descrição, fontes e metadados de compartilhamento |
| `app/globals.css` | Paleta de cores e animações |
| `components/gadogest/` | Uma seção do site por arquivo (abertura, problema, solução, diferenciais, fazendas, parceiros, equipe, contato) |
| `lib/contato.ts` | WhatsApp, e-mail e mensagens prontas usados no site inteiro |
| `public/img/` | Fotos, logo e telas do sistema |

## Publicação

Cada envio para o branch `main` é publicado automaticamente em www.gadogest.com.br.
Os demais branches geram um link de prévia na Vercel, para conferir as mudanças antes de irem ao ar.

---

© GadoGest. Todos os direitos reservados.
