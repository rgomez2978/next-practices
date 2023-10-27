import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  // MUlti layout
  return getLayout(<Component {...pageProps} />)

  // Carga normal
  // return <Component {...pageProps} />

}

export default MyApp
