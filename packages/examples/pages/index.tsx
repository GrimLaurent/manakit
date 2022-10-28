import React, { Fragment, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from './templates/view';
import { useTranslation } from 'react-i18next';

import {
  Appbar,
  Avatar,
  Btn,
  Card,
  CardActions,
  Container,
  GridCol,
  GridRow,
  Spacer,
  Toolbar,
  Icon,
  Dialog,
  CardTitle,
  Divider,
  List,
  ListItem,
} from 'manakit';
import { mdiQrcode, mdiAbugidaThai, mdiClose } from '@mdi/js';

const NextApp: NextPage = () => {
  const { t } = useTranslation();
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Fragment>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Appbar>
          <div>
            <h1 className="text-uppercase text-caption primary--text">Portfolio</h1>
            <h4 className="text-h5 font-weight-black mt-n1 primary">Bonsoir</h4>
            <h4 className="text-h5 font-weight-black mt-n1 text--primary">Bonsoir</h4>
          </div>
          <Spacer />
          <Btn
            icon
            onClick={() => {
              setOpenDialog(true);
            }}
          >
            <Icon title="qrcode" className={'text--primary'}>
              {mdiQrcode}
            </Icon>
          </Btn>
        </Appbar>
        <Container>
          <GridRow>
            <GridCol cols={12}>
              <Card>
                <img src="https://picsum.photos/seed/picsum/200/300" width={'100%'} className={'rounded-t'} />
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

          <Dialog open={openDialog} close={() => setOpenDialog(false)}>
            <Card>
              <CardTitle>
                Me contacter <Spacer />{' '}
                <Btn icon text onClick={() => setOpenDialog(false)}>
                  <Icon>{mdiClose}</Icon>
                </Btn>
              </CardTitle>
              <Divider />
              <List>
                <ListItem>06 24 35 13 92</ListItem>
                <ListItem>laurent@lalattyna.dev</ListItem>
              </List>
            </Card>
          </Dialog>
        </Container>
      </Layout>
    </Fragment>
  );
};

export default NextApp;
