import React from 'react';
import type { AppProps } from 'next/app';

import ThemeContainer from '../contexts/theme/ThemeContainer';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  );
}

export default MyApp;
