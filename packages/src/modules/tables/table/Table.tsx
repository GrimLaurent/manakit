/**
 * Table
 *
 * @type Structural
 * @module Table
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Table.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { TableType } from './types/Table';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../../utils';

const Table: FunctionComponent<TableType> = ({ id, className, style, children, height, fixedHeader, dense }) => {
  const classList = [
    { el: 'mk-table--fixed-header', val: fixedHeader },
    { el: 'mk-table--dense', val: dense },
  ];

  const styleList = {
    height: useSizeHtml(height),
  };

  return (
    <Fragment>
      <div
        id={useIdHtml(id)}
        className={useClassHtml('mk-table', className, classList)}
        style={useStyleHtml(styleList, style)}
      >
        <div className="mk-table--wrap">
          <table>{children}</table>
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
