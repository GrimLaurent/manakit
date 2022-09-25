import Head from 'next/head';
import React from 'react';

import Layout, { siteTitle } from './templates/view';

function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>About</h1>
        <h2>TEXT</h2>
      </section>
    </Layout>
  );
}

export default About;
