import { Fragment } from 'react';
import Head from 'next/head';
import Home from '../home';

export const siteTitle = 'Manakit Sandbox (Nextjs)';

function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Manakit Sandbox for test and learn use Manakit" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {home ? (
        <div>
          <Home />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </Fragment>
  );
}

export default Layout;
