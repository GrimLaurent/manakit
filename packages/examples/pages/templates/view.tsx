import { Fragment, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import '../../i18n';
import Manakit from './themeManakit';
import Image from 'next/image';

import {
  App,
  Appbar,
  Card,
  CardText,
  Container,
  Footer,
  GridCol,
  GridRow,
  Icon,
  List,
  ListItem,
  ListItemGroup,
  Main,
  NavigationDrawer,
  Responsive,
  Toolbar,
  ToolbarTitle,
} from 'manakit';

export const siteTitle = 'Manakit Sandbox (Nextjs)';
import { mdiGithub, mdiNpm, mdiTwitter, mdiDisqus } from '@mdi/js';

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
      <App theme={Manakit} isDark={darkMode}>
        <Appbar app>
          <a href="https://manakit.manastone.fr" target={'_blank'} className={'d-inline-block mx-2 '}>
            <img src="/logo/Manakit_Logo.png" width={116} height={50} />
          </a>
        </Appbar>
        <NavigationDrawer app>
          <List dense>
            <ListItemGroup>
              <ListItem>List</ListItem>
              <ListItem>List</ListItem>
            </ListItemGroup>
          </List>
        </NavigationDrawer>
        <Main>
          {/* <Container fluid> */}
          {/* <Card>
            <Responsive aspectRatio={'16/9'}>
              <CardText>Bonjour is card test</CardText>
            </Responsive>
          </Card> */}
          {/* {children} */}
          {/* </Container> */}
          Main Content
        </Main>
        <Footer app className={'justify-center'}>
          <a href="https://github.com/manastone" target={'_blank'} className={'primary--text d-inline-block mx-2 '}>
            <Icon>{mdiGithub}</Icon>
          </a>
          <a
            href="https://www.npmjs.com/org/manastone"
            target={'_blank'}
            className={'primary--text d-inline-block mx-2 '}
          >
            <Icon>{mdiNpm}</Icon>
          </a>
          <a href="https://manastone.fr" target={'_blank'} className={'d-inline-block mx-2 '}>
            <img src="/logo/Manastone_Logo_Color_Dark.png" width={64} height={64} />
          </a>
          <a href="https://twitter.com/ManastoneDev" target={'_blank'} className={'primary--text d-inline-block mx-2 '}>
            <Icon>{mdiTwitter}</Icon>
          </a>
          <a
            href="https://discord.com/invite/24pTEehYbQ"
            target={'_blank'}
            className={'primary--text d-inline-block mx-2 '}
          >
            <Icon>{mdiDisqus}</Icon>
          </a>
        </Footer>
      </App>
    </Fragment>
  );
}

export default Layout;
