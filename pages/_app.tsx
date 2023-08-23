import '@/css/global.css';
import '@/css/prism.css';
import '@/css/tailwind.css';
import 'katex/dist/katex.css';

import '@fontsource/fira-code';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/800.css';
import * as gtag from 'pages/gtag';

import { ThemeProvider, useTheme } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

// import Analytics from '@/components/analytics';
import { Analytics } from '@vercel/analytics/react';
import { ClientReload } from '@/components/ClientReload';
import LayoutWrapper from '@/components/LayoutWrapper';
import siteMetadata from '@/data/siteMetadata';

import { GeistProvider } from '@geist-ui/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';

const isDevelopment = process.env.NODE_ENV === 'development';
const isSocket = process.env.SOCKET;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute='class' defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <GeistProviderWithTheme>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </GeistProviderWithTheme>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </ThemeProvider>
  );
}

function GeistProviderWithTheme(props): React.ReactElement {
  const { resolvedTheme } = useTheme();

  return (
    <GeistProvider themeType={resolvedTheme}>{props.children}</GeistProvider>
  );
}
