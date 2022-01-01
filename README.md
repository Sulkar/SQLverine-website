# Website

- [SQLverine.org](https://sqlverine.org)


## SQLverine familiy
- :mag_right: [SQLverine](https://github.com/Sulkar/SQLverine)

## Infos
- Navbar swizzled `npm run swizzle @docusaurus/theme-classic Navbar -- --danger` for Login/Profil navbar item see [commit](https://github.com/Sulkar/SQLverine-website/commit/894e2d93dd47631dae3defae483cc7bb7f62520c).

## Installation
- benötigt Node.js

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

**Videos werden im Ordner videos ausgegeben und sind statisch verlinkt. Dieser Ordner muss nicht jedes Mal beim Veröffentlichen der Webseite auf den Webspace hochgeladen werden.**

## Deployment

```console
GIT_USER=<Your GitHub username> yarn deploy
Zum Beispiel: GIT_USER=Sulkar yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Deploy to SQLverine.org via FTP
In docusaurus.config.js you must change the baseUrl:
```js
baseUrl: '/SQLverine-website/',
//change to:
baseUrl: '/',
```
