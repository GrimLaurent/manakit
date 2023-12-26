/**
 * Row
 * @type Structural
 * @module Row
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';

// styles
import './Row.scss';

// utilities
import { useClassName, useStyle } from '../../../utils/dom';
import {
  AlignContentType,
  AlignType,
  ElementChildrenType,
  ElementClassHTMLType,
  ElementIdHTMLType,
  ElementStyleHTMLType,
  JustifyType,
} from '../../../types';

const Row: FunctionComponent<RowClassType> = ({
  id,
  className,
  style,
  children,
  dense,
  noGutters,
  align,
  alignXs,
  alignSm,
  alignMd,
  alignLg,
  alignXl,
  alignContent,
  alignContentXs,
  alignContentSm,
  alignContentMd,
  alignContentLg,
  alignContentXl,
  justify,
  justifyXs,
  justifySm,
  justifyMd,
  justifyLg,
  justifyXl,
}) => {
  const classList = [
    { el: 'is--dense', val: dense },
    { el: 'no-gutters', val: noGutters },
    { el: 'align', val: align },
    { el: 'align-xs', val: alignXs },
    { el: 'align-sm', val: alignSm },
    { el: 'align-md', val: alignMd },
    { el: 'align-lg', val: alignLg },
    { el: 'align-xl', val: alignXl },
    { el: 'align-content', val: alignContent },
    { el: 'align-xs-content', val: alignContentXs },
    { el: 'align-sm-content', val: alignContentSm },
    { el: 'align-md-content', val: alignContentMd },
    { el: 'align-lg-content', val: alignContentLg },
    { el: 'align-xl-content', val: alignContentXl },
    { el: 'justify', val: justify },
    { el: 'justify-xs', val: justifyXs },
    { el: 'justify-sm', val: justifySm },
    { el: 'justify-md', val: justifyMd },
    { el: 'justify-lg', val: justifyLg },
    { el: 'justify-xl', val: justifyXl },
  ];

  return (
    <Fragment>
      <div id={id} className={useClassName(`mkt-row`, className, classList)} style={useStyle({}, style)}>
        {children}
      </div>
    </Fragment>
  );
};

class RowClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  dense?: boolean;
  noGutters?: boolean;
  align?: AlignType;
  alignXs?: AlignType;
  alignSm?: AlignType;
  alignMd?: AlignType;
  alignLg?: AlignType;
  alignXl?: AlignType;
  alignContent?: AlignContentType;
  alignContentXs?: AlignContentType;
  alignContentSm?: AlignContentType;
  alignContentMd?: AlignContentType;
  alignContentLg?: AlignContentType;
  alignContentXl?: AlignContentType;
  justify?: JustifyType;
  justifyXs?: JustifyType;
  justifySm?: JustifyType;
  justifyMd?: JustifyType;
  justifyLg?: JustifyType;
  justifyXl?: JustifyType;
}

export default Row;
