import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import '../../i18n';

import { App } from 'manakit';

export const siteTitle = 'Manakit Sandbox (Nextjs)';

function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(e.target.href);
  };

  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Manakit Sandbox for test and learn use Manakit" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <App>
        <ul>
          {home ? (
            <li>
              <a href="/about" onClick={handleClick}>
                About
              </a>
            </li>
          ) : (
            <li>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </li>
          )}
        </ul>
        <div>{children}</div>
      </App>
    </Fragment>
  );
}

export default Layout;
