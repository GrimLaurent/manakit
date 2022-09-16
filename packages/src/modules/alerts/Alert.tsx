/**
 * Alert
 *
 * @type Structural
 * @module Alert
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Alert.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { AlertType } from './types/Alert';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../utils';

const Alert: FunctionComponent<AlertType> = ({
  id,
  className,
  style,
  children,
  type,
  icon,
  border,
  elevation,
  dismissible,
  model,
  dense,
  outlined,
  text,
  shaped,
  colorBorder,
}) => {
  const [open, setOpen] = useState(true);

  const classList = [
    { el: type, val: colorBorder !== true && type ? true : false },
    { el: 'elevation-1', val: typeof elevation === 'boolean' && elevation },
    { el: 'elevation', val: typeof elevation === 'string' ? elevation : false },
    { el: 'mk-alert--dense', val: dense },
    { el: 'mk-alert--outlined', val: outlined },
    { el: 'mk-alert--text', val: text },
    { el: 'mk-alert--shaped', val: shaped },
  ];
  const classListBorder = [
    { el: 'mk-alert--border', val: border },
    { el: colorBorder, val: colorBorder },
  ];

  useEffect(() => {
    if (typeof model === 'boolean') setOpen(model);
  }, [model]);

  return (
    <Fragment>
      <div
        id={useIdHtml(id)}
        className={useClassHtml(open ? 'mk-alert is--open' : 'mk-alert', className, classList)}
        style={useStyleHtml({}, style)}
        role="alert"
      >
        <div className="mk-alert--wrap">
          {icon ? <span className="mk-alert--icon">{icon}</span> : ''}
          {children ? <div className="mk-alert--content">{children}</div> : ''}
          {border ? <div className={useClassHtml('mk-alert--border', undefined, classListBorder)} /> : ''}
          {dismissible ? (
            <button type="button" className="mk-alert--btn" aria-label="close" onClick={() => setOpen(false)}></button>
          ) : (
            ''
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Alert;
