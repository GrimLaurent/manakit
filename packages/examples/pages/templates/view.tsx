import { Fragment, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import '../../i18n';
import Manakit from './themeManakit';
import Image from 'next/image';

import {
  KApp,
  App,
  Appkit,
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
  KRectangle,
  KCircle,
  KRoundedRectangle,
  KCapsule,
  KIcon,
  KContainer,
  KRow,
  KCol,
} from 'manakit';

import menujson from '../menu.json';

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

  console.log('menujson', menujson);

  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Manakit Sandbox for test and learn use Manakit" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <KApp set={Manakit} isDark={darkMode}>
        <KContainer>
          <KRow>
            <KCol>
              {' '}
              <KRectangle color="primary" width={75} height={25}>
                KRectangle
              </KRectangle>
            </KCol>
            <KCol>
              <KRectangle color="primary" width={75} height={25}>
                KRectangle
              </KRectangle>
            </KCol>
            <KCol>
              <KRectangle color="primary" width={75} height={25}>
                KRectangle
              </KRectangle>
            </KCol>
            <KCol>
              <KRectangle color="primary" height={25}>
                KRectangle
              </KRectangle>
            </KCol>
            <KCol>
              <KRectangle color="primary" width={75} height={25}>
                KRectangle
              </KRectangle>
            </KCol>
            <KCol>
              <KRectangle color="primary" width={75} height={25}>
                KRectangle
              </KRectangle>
            </KCol>
            <KCol>
              <KRectangle color="primary" width={75} height={25}>
                KRectangle
              </KRectangle>
            </KCol>
            <KCol>
              <KRectangle color="primary" width={75} height={25}>
                KRectangle
              </KRectangle>
            </KCol>
            <KCol>
              <KRectangle color="primary" width={75} height={25}>
                KRectangle
              </KRectangle>
            </KCol>
            <KCol>
              <KRectangle color="primary" width={75} height={25}>
                KRectangle
              </KRectangle>
            </KCol>
            <KCol>
              <KRectangle color="primary" width={75} height={25}>
                KRectangle
              </KRectangle>
            </KCol>
          </KRow>
          <KRow>
            <KCol>1</KCol>
            <KCol>2</KCol>
            <KCol>3</KCol>
            <KCol>4</KCol>
            <KCol>6</KCol>
            <KCol>7</KCol>
            <KCol>8</KCol>
            <KCol>9</KCol>
            <KCol>10</KCol>
            <KCol>11</KCol>
            <KCol>12</KCol>
          </KRow>
          <KRow>
            <KCol>1</KCol>
            <KCol>2</KCol>
            <KCol>3</KCol>
            <KCol>4</KCol>
            <KCol>6</KCol>
            <KCol>7</KCol>
            <KCol>8</KCol>
            <KCol>9</KCol>
            <KCol>10</KCol>
            <KCol>11</KCol>
            <KCol>12</KCol>
          </KRow>
          <KRow>
            <KCol cols={2}>1</KCol>
            <KCol cols={2}>2</KCol>
            <KCol cols={2}>3</KCol>
            <KCol cols={2}>4</KCol>
            <KCol cols={2}>6</KCol>
            <KCol cols={2}>7</KCol>
            <KCol cols={2}>8</KCol>
            <KCol cols={2}>9</KCol>
            <KCol cols={2}>10</KCol>
            <KCol cols={2}>11</KCol>
            <KCol cols={2}>12</KCol>
          </KRow>
          <KRow>
            <KCol lg={2}>1</KCol>
            <KCol lg={2}>2</KCol>
            <KCol lg={2}>3</KCol>
            <KCol lg={2}>4</KCol>
            <KCol lg={2}>6</KCol>
            <KCol lg={2}>7</KCol>
            <KCol lg={2}>8</KCol>
            <KCol lg={2}>9</KCol>
            <KCol lg={2}>10</KCol>
            <KCol lg={2}>11</KCol>
            <KCol lg={2}>12</KCol>
          </KRow>
          <KRow>
            <KCol sm={3} lg={2}>
              1
            </KCol>
            <KCol sm={4} lg={2}>
              2
            </KCol>
            <KCol sm={3} lg={2}>
              3
            </KCol>
            <KCol sm={4} lg={2}>
              4
            </KCol>
            <KCol sm={3} lg={2}>
              6
            </KCol>
            <KCol sm={4} lg={2}>
              7
            </KCol>
            <KCol sm={3} lg={2}>
              8
            </KCol>
            <KCol sm={4} lg={2}>
              9
            </KCol>
            <KCol sm={3} lg={2}>
              10
            </KCol>
            <KCol sm={4} lg={2}>
              11
            </KCol>
            <KCol sm={3} lg={2}>
              12
            </KCol>
          </KRow>
        </KContainer>
        <KRectangle color="primary" width={300} height={300}>
          KRectangle
        </KRectangle>
        <KCircle color="primary" size={300}>
          KCircle
        </KCircle>
        <KRoundedRectangle color="primary" width={300} height={300}>
          KRoundedRectangle
        </KRoundedRectangle>
        <KCapsule color="primary" width={300} height={100}>
          KCapsule
        </KCapsule>
        <KIcon color="primary">{mdiGithub}</KIcon>
        <Icon>{mdiGithub}</Icon>
        <KIcon>{mdiGithub}</KIcon>
        <KIcon small>{mdiGithub}</KIcon>
        <KIcon large>{mdiGithub}</KIcon>
        <div className="text-on-surface">bite</div>
        {/* <KRectangle width={800} height={1200} color={'primary'} elevation={10}>
          body
        </KRectangle>
        <Appbar app>
          <a href="https://manakit.manastone.fr" target={'_blank'} className={'d-inline-block mx-2 '}>
            <img src="/logo/Manakit_Logo.png" width={116} height={50} />
          </a>
        </Appbar>
        <NavigationDrawer app>
          <List dense>
            <ListItemGroup>
              {menujson.map((menu: any) => {
                return (
                  <ListItem>
                    <Link href={menu.path} key={menu.key}>
                      {menu.key}
                    </Link>
                  </ListItem>
                );
              })}
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
        {/* </Container> */}
        {/* Main Content
          <Card elevation={'10'}>CARD PAGE WORKD</Card>
          {children}
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
        </Footer> */}
      </KApp>
    </Fragment>
  );
}

export default Layout;
