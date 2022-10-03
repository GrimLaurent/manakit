import React, { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from './templates/view';
import { useTranslation } from 'react-i18next';

import { Container, Toolbar } from 'manakit';

const NextApp: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Container>
          <Toolbar className={'pa-0'}>
            <div>
              <h1>{t('portfolio')}</h1>
              <h4>Bonsoir</h4>
            </div>
          </Toolbar>
        </Container>
      </Layout>
    </Fragment>
  );
};

export default NextApp;
