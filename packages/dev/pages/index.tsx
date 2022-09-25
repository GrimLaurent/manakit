import React, { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from './templates/view';

const NextApp: NextPage = () => {
  return (
    <Fragment>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section>
          <p>[Your Self Introduction]</p>
        </section>
      </Layout>
    </Fragment>
  );
};

export default NextApp;
