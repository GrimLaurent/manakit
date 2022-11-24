import { mdiDisqus, mdiGithub, mdiNpm, mdiTwitter } from '@mdi/js';
import { Footer as FooterKit, Icon } from 'manakit';
import { Fragment } from 'react';

export default function Footer() {
  return (
    <Fragment>
      <FooterKit app className={'justify-center'}>
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
      </FooterKit>
     
    </Fragment>
  );
}

