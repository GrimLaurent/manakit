import { Fragment } from 'react';
import { mdiDisqus, mdiGithub, mdiNpm, mdiTwitter } from '@mdi/js';
import { Footer as FooterKit, Icon } from 'manakit';
import { discordURL, githubURL, npmURL, twitterURL, websiteManastoneURL } from '../constant';

export default function Footer() {
  return (
    <Fragment>
      <FooterKit app className={'justify-center'}>
        <a href={githubURL} target={'_blank'} className={'primary--text d-inline-block mx-2 '}>
          <Icon>{mdiGithub}</Icon>
        </a>
        <a
          href={npmURL}
          target={'_blank'}
          className={'primary--text d-inline-block mx-2 '}
        >
          <Icon>{mdiNpm}</Icon>
        </a>
        <a href={websiteManastoneURL} target={'_blank'} className={'d-inline-block mx-2 '}>
          <img src="/logo/Manastone_Logo_Color_Dark.png" width={64} height={64} />
        </a>
        <a href={twitterURL} target={'_blank'} className={'primary--text d-inline-block mx-2 '}>
          <Icon>{mdiTwitter}</Icon>
        </a>
        <a
          href={discordURL}
          target={'_blank'}
          className={'primary--text d-inline-block mx-2 '}
        >
          <Icon>{mdiDisqus}</Icon>
        </a>
      </FooterKit>
     
    </Fragment>
  );
}

