/**
 * Footer
 *
 * @type Structural
 * @module Footer
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Footer.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { FooterType } from './types/Footer';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../utils';

const Footer: FunctionComponent<FooterType> = ({
  id,
  className,
  style,
  children,
  absolute,
  elevation,
  fixed,
  inset,
  outlined,
  padless,
  rounded,
  shaped,
  tile,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  app,
}) => {
  const classList = [
    { el: 'elevation-1', val: typeof elevation === 'boolean' && elevation },
    { el: 'elevation', val: typeof elevation === 'string' ? elevation : false },
    { el: 'rounded-lg', val: typeof rounded === 'boolean' && rounded },
    { el: 'rounded', val: typeof rounded === 'string' ? rounded : false },
    { el: 'footer--absolute', val: absolute },
    { el: 'footer--fixed', val: fixed },
    { el: 'footer--fixed', val: app },
    { el: 'is--inset', val: inset },
    { el: 'footer--outlined', val: outlined },
    { el: 'footer--shaped', val: shaped },
    { el: 'footer--tile', val: tile },
    { el: 'footer--padless', val: padless },
  ];

  const styleList = {
    width: useSizeHtml(width),
    height: useSizeHtml(height),
    minWidth: useSizeHtml(minWidth),
    maxWidth: useSizeHtml(maxWidth),
    minHeight: useSizeHtml(minHeight),
    maxHeight: useSizeHtml(maxHeight),
  };

  return (
    <Fragment>
      <footer
        id={useIdHtml(id)}
        className={useClassHtml('mk-footer', className, classList)}
        style={useStyleHtml(styleList, style)}
      >
        <div className="mk-overlay--wrap">{children}</div>
      </footer>
    </Fragment>
  );
};

export default Footer;
