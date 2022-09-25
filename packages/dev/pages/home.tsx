import Head from 'next/head';
import React from 'react';

import Layout, { siteTitle } from './templates/view';

function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Home page</h1>
      </section>
    </Layout>
  );
}

export default Home;
