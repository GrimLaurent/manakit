import { Appbar, AppbarTitle, Main, NavigationDrawer } from 'manakit';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import { siteTitle } from '../../constant';

import  allRoutes  from '../../routers/routes';

//components
import Navigation from '../navigation';


export default function Layout({ children, mode }: { children: React.ReactNode; mode?: string }) {
  return (
    <Fragment>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Manakit Sandbox for test and learn use Manakit" />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <div>
            <Appbar app>
                <Link href={'/en'}>
                    <AppbarTitle>Manakit</AppbarTitle>
                </Link>
            </Appbar>

            <Navigation routeList={allRoutes} />

            <Main>
                {children}
            </Main>
           
        </div>
    </Fragment>
  );
}
