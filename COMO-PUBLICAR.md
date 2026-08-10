# Como publicar o site de verdade (passo a passo)

Este projeto (`astro-site/`) já está pronto localmente. Faltam só passos que **precisam ser feitos por
você**, porque envolvem criar contas em serviços externos — isso eu não posso fazer por você.

## 1. Testar localmente (opcional, mas recomendado)

Precisa ter o [Node.js](https://nodejs.org) instalado (versão 18 ou mais nova). Depois, dentro da pasta
`astro-site`:

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321`.

## 2. Criar o repositório no GitHub

1. Crie uma conta gratuita em [github.com](https://github.com) (se ainda não tiver).
2. Crie um repositório novo, por exemplo `jorge-chame-livros`.
3. Suba o conteúdo da pasta `astro-site/` para esse repositório:

```bash
cd astro-site
git init
git add .
git commit -m "Site inicial do Jorge Chame"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/jorge-chame-livros.git
git push -u origin main
```

## 3. Publicar com deploy automático — Cloudflare Pages

1. Crie uma conta gratuita em [pages.cloudflare.com](https://pages.cloudflare.com).
2. "Create a project" → "Connect to Git" → escolha o repositório que você criou.
3. Configurações de build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Clique em "Save and Deploy". Em ~1 minuto o site estará no ar em um endereço tipo
   `jorge-chame-livros.pages.dev`.
5. A partir de agora, **toda vez que algo for alterado e publicado no repositório, o site atualiza
   sozinho** — não precisa fazer esse processo de novo.

## 4. Painel de edição de conteúdo — Decap CMS + Netlify Identity

O painel de edição (`/admin`) já está no projeto, mas precisa de um provedor de login/autorização para
saber quem pode editar. O caminho mais simples e gratuito:

1. Crie também uma conta gratuita em [netlify.com](https://netlify.com) e conecte o mesmo repositório lá
   (pode ficar só como back-end de autenticação — a publicação em si continua sendo pela Cloudflare).
2. Ative **Identity** e **Git Gateway** nas configurações do site na Netlify.
3. Convide o e-mail de quem vai editar o conteúdo (você e/ou outra pessoa da família).
4. Acesse `SEU-SITE/admin` e faça login — aí dá pra editar catálogo e depoimentos por formulário, sem
   tocar em código.

## 5. Domínio próprio (opcional)

Se quiser um endereço tipo `jorgechame.com.br` em vez de `jorge-chame-livros.pages.dev`:

1. Registre o domínio em [registro.br](https://registro.br) (custo aproximado de R$40/ano).
2. Na Cloudflare Pages, vá em "Custom domains" e siga as instruções para apontar o domínio.

## O que eu já deixei pronto

- Estrutura completa do site (Astro) com a mesma identidade visual aprovada (bege pastel, verde-água,
  coral, amarelo).
- Catálogo e depoimentos como arquivos de conteúdo editáveis, prontos para o Decap CMS.
- Botão de WhatsApp (número real conectado) e botão de ligação telefônica.
- Espaço para link de vídeo do Instagram em cada categoria do catálogo (campo `instagram_url` —
  preencha quando os vídeos existirem).
- Painel `/admin` configurado (`public/admin/config.yml`), só falta ativar o login (passo 4 acima).
