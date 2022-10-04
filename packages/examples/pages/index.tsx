import React, { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from './templates/view';
import { useTranslation } from 'react-i18next';

import { Appbar, Avatar, Btn, Card, CardActions, Container, GridCol, GridRow, Spacer, Toolbar, Icon } from 'manakit';
import { mdiQrcode, mdiAbugidaThai, mdiChat } from '@mdi/js';
// import Icon from '@mdi/react';

const NextApp: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Appbar>
          <div>
            <h1 className="text-uppercase text-caption">{t('portfolio')}</h1>
            <h4 className="text-h5 font-weight-black mt-n1">Bonsoir</h4>
          </div>
          <Spacer />
          <Btn icon>
            {/* <Icon>{mdiQrcode}</Icon>
            <Icon>{mdiAbugidaThai}</Icon>
            <Icon>{mdiChat}</Icon> */}
            <Icon className={'text--primary'} small>
              {mdiQrcode}
            </Icon>
            {/* <Icon path={mdiQrcode} title="User Profile" size={1} horizontal vertical rotate={90} color="red" spin /> */}
          </Btn>
          <button>QrCode</button>
        </Appbar>
        <Container>
          <GridRow>
            <GridCol cols={12}>
              <Card>
                <img src="https://picsum.photos/seed/picsum/200/300" width={'100%'} />
                <Avatar>
                  <img src="https://picsum.photos/seed/picsum/200/300" />
                </Avatar>
                <h2>Laurent Grimaldi</h2>
                <h3>Lalattyna</h3>
                <p>Developpeur Web JS</p>
                <div>progress bar</div>
                <span>lvl4</span>
                <p>En Savoir plus</p>
                <p>Bim Bam Boum</p>
                <CardActions>
                  <Spacer />
                  <button>Hello</button>
                </CardActions>
              </Card>
            </GridCol>
            <GridCol cols={12}>
              <Card>Card</Card>
            </GridCol>
          </GridRow>
        </Container>
      </Layout>
    </Fragment>
  );
};

export default NextApp;
