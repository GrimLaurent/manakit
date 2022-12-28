import { Container, GridCol, GridRow } from 'manakit';
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
        <Container>
          <GridRow>
            <GridCol cols={2}>col 2</GridCol>
            <GridCol cols={2}>col 2</GridCol>
            <GridCol cols={2}>col 2</GridCol>
            <GridCol cols={2}>col 2</GridCol>
            <GridCol cols={2}>col 2</GridCol>
            <GridCol cols={2}>col 2</GridCol>
          </GridRow>
          <GridRow>
            <GridCol cols={3} md={6}>
              col 3 md 6
            </GridCol>
            <GridCol cols={3} md={6}>
              col 3 md 6
            </GridCol>
            <GridCol cols={2} md={10}>
              col 2 md 10
            </GridCol>
            <GridCol cols={2} md={2}>
              col 2 md 2
            </GridCol>
            <GridCol cols={2} lg={12}>
              col 2 lg 12
            </GridCol>
          </GridRow>
        </Container>
        <div className="h-0">block</div>
      </section>
    </Layout>
  );
}

export default About;
