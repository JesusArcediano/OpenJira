import type { AppProps } from 'next/app';

import { SnackbarProvider } from 'notistack';

import { ThemeProvider, CssBaseline, Snackbar } from '@mui/material';
import { darkTheme, lightTheme } from '@/themes';

import { EntriesProvider } from '@/context/entries';
import { UIProvider } from '@/context/ui';
import '@/styles/globals.css';



export default function App({ Component, pageProps }: AppProps) {
  return(
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider
        // value={{ entries: [] }}
      >
        <UIProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
    
    )
}
