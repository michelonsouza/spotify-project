# Vuefy Project

## Vue CLI

- @vue/cli version = ^3.0.5

## Vuefy Setup

```bash
git clone https://github.com/michelonsouza/spotify-project.git
```

### Após a clonagem entre na pasta com seu Terminal (powershell, bash ou terminal MacOS)

```bash
npm install
```

### Configurações inicias

## Spotify API

### Dentro da pasta `config` edite o arquivo `sdkSpotify.config.js` como segue abaixo

```js
client.settings = {
  clientId: "INSERIR_SEU_CLIENT_ID",
  secretId: "INSERIR_SUA_SECRET_KEY",
  scopes: [
    "user-follow-modify user-follow-read user-library-read user-top-read"
  ],
  redirect_uri: process.env.VUE_APP_REDIRECT_URI
};
```

### No arquivo `.env.development` insira sua `URL` de redirecionamento para ambiente de desenvolvimento, por padrão é a que segue

```bash
VUE_APP_REDIRECT_URI=http://localhost:8080/auth
```

### No arquivo `.env.production` insira sua `URL` para redirecionamento para ambiente de produção, previamente configurada no Dashboard do Spotify

```bash
VUE_APP_REDIRECT_URI=INSIRA_SUA_URL_DE_REDIRECIONAMENTO
```

### Compilar pra desenvolvimento com hot-reload

```bash
npm run serve
```

### Compilar e minificar arquivos para produção

```bash
npm run build
```

### Caso necessite utilize o lint para identar, organizar e pontuar seu código

```bash
npm run lint
```

## Licença

MIT
