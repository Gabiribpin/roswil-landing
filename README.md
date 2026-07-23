# RW Ateliê — Landing page

Landing page profissional do **RW Ateliê** (Rosane), pronta para publicação na Vercel.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Onde colocar os arquivos e dados

Tudo que muda com frequência está centralizado:

### 1. Logo

Arquivo atual:

`public/images/logo-rw-atelie.png`

Substitua mantendo o mesmo nome, ou atualize `logoSrc` em `src/lib/site.ts`.

### 2. Foto da Rosane

Arquivo atual (provisório — imagem de atelier até a foto oficial):

`public/images/rosane.png`

**Importante:** substitua por uma foto real da Rosane **sem editar o rosto, o corpo, a roupa ou a aparência**. Use o mesmo nome (`rosane.png`) ou troque para `rosane.jpg` e atualize o caminho em `Hero.tsx` e `About.tsx`.

Formatos aceitos: JPG/PNG/WebP. Recomendado: retrato vertical, boa luz, pelo menos 1200px de largura.

### 3. Número do WhatsApp

Edite `src/lib/site.ts`:

```ts
whatsappNumber: "5511999999999", // código do país + DDD + número
whatsappDisplay: "(11) 99999-9999",
```

### 4. Cidade e região

No mesmo arquivo:

```ts
location: "São Paulo — SP",
```

### 5. Instagram (opcional)

```ts
instagramUrl: "https://instagram.com/seu.usuario",
```

Se ficar vazio, o Instagram não aparece no rodapé.

### 6. Nome definitivo da marca / domínio

Atualize em `src/lib/site.ts`:

- `brandName`
- `seo.title`, `seo.description`, `seo.url`

## Publicar na Vercel

1. Crie um repositório no GitHub com este projeto
2. Em [vercel.com](https://vercel.com), importe o repositório
3. Framework: **Next.js** (detectado automaticamente)
4. Deploy — sem variáveis de ambiente obrigatórias

Comandos de build usados pela Vercel:

```bash
npm run build
```

## Scripts

| Comando         | Descrição              |
|-----------------|------------------------|
| `npm run dev`   | Ambiente de desenvolvimento |
| `npm run build` | Build de produção      |
| `npm run start` | Sobe o build localmente |
| `npm run lint`  | ESLint                 |

## Observações

- O formulário de contato **não usa banco de dados**: ele abre o WhatsApp com a mensagem organizada.
- Não há login nem área administrativa.
- Mensagem padrão do WhatsApp já está configurada conforme o briefing.
