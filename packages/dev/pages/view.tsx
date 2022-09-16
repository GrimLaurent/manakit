import { Fragment } from 'react';
import Head from 'next/head';

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
      <div>Hello World</div>
    </Fragment>
  );
}

export default Layout;
