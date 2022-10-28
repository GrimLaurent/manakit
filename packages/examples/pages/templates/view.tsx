import { Fragment, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import '../../i18n';
import Manakit from './themeManakit';
import { App } from 'manakit';

export const siteTitle = 'Manakit Sandbox (Nextjs)';

function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  const router = useRouter();
  const defaultTheme = 'dark';
  const [darkMode, setDarkMode]: undefined | any = useState();

  function handleClickMode() {
    if (darkMode) {
      setDarkMode(false);
    } else if (!darkMode) {
      setDarkMode(true);
    } else {
      defaultTheme === 'dark' ? setDarkMode(false) : setDarkMode(true);
    }
  }

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
      <App theme={Manakit} themeDefault={defaultTheme} isDark={darkMode}>
        <div className="background" style={{ width: '100%', height: '400px' }}>
          <button onClick={() => handleClickMode()} className={'text--text'}>
            Dark/Light
          </button>
        </div>
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
