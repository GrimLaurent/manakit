import type { AppProps } from 'next/app';
import '../assets/scss/app.scss';
import { App as AppKit } from 'manakit';
import { manakit } from '../plugins/manakit';

export default function App({ Component, pageProps }: AppProps) {
  return <AppKit theme={manakit}>
      <Component {...pageProps} />
    </AppKit>;
}
