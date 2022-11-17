import {
  Appbar,
  Btn,
  Card,
  CardTitle,
  Chip,
  Container,
  Content,
  Icon,
  Paper,
  Responsive,
  Spacer,
  Toolbar,
} from 'manakit';
import Head from 'next/head';
import React, { Fragment, useState } from 'react';

import { mdiContentCopy, mdiThemeLightDark } from '@mdi/js';
import Link from 'next/link';

function Home() {
  const [commandLine, setCommandLine] = useState('yarn add manakit');

  return (
    <Fragment>
      <Head>
        <title>test</title>
      </Head>
      <Appbar flat app>
        <Spacer />
        <Btn icon onClick={() => copyCommand()}>
          <Icon>{mdiThemeLightDark}</Icon>
        </Btn>
      </Appbar>
      <Container fillHeight>
        <Responsive className={'align-center text-center fill-height'}>
          <h1 className="d-inline-block text-h2 font-weight-black">
            <span className="font-weight-thin">Use </span>
            <span className="primary--text">Manakit</span>
          </h1>
          <p className="text--secondary">The simply React UI Framework</p>

          <Card
            rounded
            className={'vscode surface--text mx-sm-4 d-inline-block'}
            elevation={'20'}
            maxWidth={480}
            width={'100%'}
            style={{ transformOrigin: 'center top 0px;' }}
          >
            <CardTitle>
              <Chip className={'warning'}>pre-alpha</Chip>
              <span id="command-install-manakit" className="py-3 px-4">
                {commandLine}
              </span>
              <Spacer />
              <Btn icon onClick={() => copyCommand()}>
                <Icon>{mdiContentCopy}</Icon>
              </Btn>
            </CardTitle>
          </Card>
          <Toolbar dense className={'mt-5'} flat style={{ background: 'transparent' }}>
            <Spacer />
            <Btn className={'mx-1'} small onClick={() => setCommandLine('yarn add manakit')}>
              yarn
            </Btn>
            <Btn className={'mx-1'} small onClick={() => setCommandLine('npm install manakit')}>
              npm
            </Btn>
            <Spacer />
          </Toolbar>
          <Toolbar className={'mt-5'} flat>
            <Spacer />
            <Link href={'/documentation'}>
              <Btn className={'mx-1 primary'} style={{ color: 'white' }} large>
                Documentation
              </Btn>
            </Link>

            <Btn
              href="https://github.com/manastone/manakit"
              target="_blank"
              className={'mx-1'}
              style={{ background: 'black', color: 'white' }}
              large
            >
              Github
            </Btn>
            <Spacer />
          </Toolbar>
        </Responsive>
      </Container>
    </Fragment>
  );
}

export default Home;

function copyCommand() {
  const value = document.getElementById('command-install-manakit');
  navigator.clipboard.writeText(value?.textContent as any);
}
