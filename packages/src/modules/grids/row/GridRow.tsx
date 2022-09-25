/**
 * GridRow
 *
 * @type Structural
 * @module GridRow
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './GridRow.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { GridRowType } from './types/GridRow';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

const GridRow: FunctionComponent<GridRowType> = ({
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
      <div
        id={useIdHtml(id)}
        className={useClassHtml(`mk-grid--row`, className, classList)}
        style={useStyleHtml({}, style)}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default GridRow;
