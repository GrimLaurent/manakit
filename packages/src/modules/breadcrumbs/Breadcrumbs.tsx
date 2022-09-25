/**
 * Breadcrumbs
 *
 * @type Structural
 * @module Breadcrumbs
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Breadcrumbs.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { BreadcrumbsType, ItemType } from './types/Breadcrumbs';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../utils';

const Breadcrumbs: FunctionComponent<BreadcrumbsType> = ({
  id,
  className,
  style,
  items,
  divider,
  large,
  itemClass,
}) => {
  const classList = [{ el: 'breadcrumbs--large', val: large }];

  return (
    <Fragment>
      <ul
        id={useIdHtml(id)}
        className={useClassHtml('mk-breadcrumbs', className, classList)}
        style={useStyleHtml({}, style)}
      >
        {items &&
          items.map((item: ItemType, index: number) => {
            const separator = items.length > index + 1 ? true : false;
            return (
              <Fragment>
                <li key={index + '-' + item.text}>
                  <a
                    href={item.href}
                    className={useClassHtml(
                      item.disabled ? 'mk-breadcrumbs--item is-disabled' : 'mk-breadcrumbs--item',
                      itemClass,
                    )}
                  >
                    {item.text}
                  </a>
                </li>
                {separator ? <li className="mk-breadcrumbs--divider">{divider ? divider : '/'}</li> : ''}
              </Fragment>
            );
          })}
      </ul>
    </Fragment>
  );
};

export default Breadcrumbs;
