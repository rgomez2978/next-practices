import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

import { darkTheme, lightTheme } from '../themes'
import { UIProvider } from '../context/ui/UIProvider'
import { EntriesProvider } from '../context/entries'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  )
}

export default MyApp
