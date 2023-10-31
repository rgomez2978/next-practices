This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

### Deploy on Github
create a new repository on the command line

```
  echo "# next-practices" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/rgomez2978/next-practices.git
  git push -u origin main

```

Subir a repositorio existente
```
  git remote add origin https://github.com/rgomez2978/next-practices.git
  git branch -M main
  git push -u origin main
```

# Projetcs List

## 01-initial-demo-javascript
Proyecto para poner en practica los siguientes principios:
- configuracion del archivo .eslintrc.json, .babelrc, next.config.js
- Uso de `useRouter`, `CSS Globals` `CSS_mododules`, `inline_styles`, 
- Metodos `<Head>` , `<Link>`,  
- Creacion de componentes, `props`
- Creacion de Layouts y multi layouts
  


## 02-initial-demo-typescript
Migracion del proyecto original de javascript a typescript, en el cual se ponen en practica los siguientes principios:
- configuracion del archivo .eslintrc.json, .babelrc, next.config.js
- Uso de `useRouter`, `CSS Globals` `CSS_mododules`, `inline_styles`
- Manejo de `interface`, `type`
- Uso de propiedades `FC`, `ReactNode`, `ReactElemen`, `JSX.Element`, `CSSProperties`, `NextApiRequest`, `NextApiResponse`,  `NextPage`, `AppProps`
- Metodos de NextJs `<Head>` , `<Link>`,  
- Creacion de componentes, `props`
- Creacion de Layouts y multi layouts
- Desplieges en local, github-vercel, docker


## 03-pokemon-static-site-generation
Creacion de proyecto de tarjetas de personajes POKEMON, en el cual se ponen en practica los siguientes principios:
- Manejo de libreria de componentes `NextUI`
- Manejo de libreria de conexion API `axios`
- Manejo de librerias externas `canvas-confetti`
- Manejo de tipado `interface`, `type`
- Uso de propiedades de React JS: `useEffect`,  `useState`
- Uso de propiedades NextJS `FC`, `NextPage`, `useRouter`, `Image`, `Html`, `Head`, `Main`, `NextScript`, `DocumentContext`
- Creacion de paginas dinamicas `[id]`
- Uso de ejecucion del lado del servidor `getStaticProps`, `getStaticPaths`
- Uso de componentes Next/UI, `<Row>`, `<Text>`, `<Image>`, `<Button>`, `<Container>`, `<Spacer>`, `<Link>`, `<Card>, <Card.Body>, <Card.Header>`, `<Grid>`, `createTheme`
- Tecnica de Construccion estatica del site con `Static Site Generation (SSG)` 



## 04-pokemon-incremental-static-regeneration
Creacion de proyecto de tarjetas de personajes POKEMON, en el cual se ponen en practica los siguientes principios:
- Manejo de libreria de componentes `NextUI`
- Manejo de libreria de conexion API `axios`
- Manejo de librerias externas `canvas-confetti`
- Manejo de tipado `interface`, `type`
- Uso de propiedades de React JS: `useEffect`,  `useState`
- Uso de propiedades NextJS `FC`, `NextPage`, `useRouter`, `Image`, `Html`, `Head`, `Main`, `NextScript`, `DocumentContext`
- Creacion de paginas dinamicas `[id]`
- Uso de ejecucion del lado del servidor `getStaticProps`, `getStaticPaths`
- Uso de componentes Next/UI, `<Row>`, `<Text>`, `<Image>`, `<Button>`, `<Container>`, `<Spacer>`, `<Link>`, `<Card>, <Card.Body>, <Card.Header>`, `<Grid>`, `createTheme`
- Tecnica de Construccion estatica del site con `Incremental Static Generation (ISG)` e `Incremental Static Regeneration (ISR)`