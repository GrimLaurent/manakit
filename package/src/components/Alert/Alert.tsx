/**
 * Alert
 * @type Structural
 * @module Alert
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import {
  ElementChildrenType,
  ElementClassHTMLType,
  ElementIdHTMLType,
  ElementStyleHTMLType,
  ElevationClass,
  RoundedClass,
  SizeHTML,
} from '../../types';

// styles
import './Alert.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';
import { getClassNameColorScheme } from '../../services/colorScheme';
import { getClassNameElevation, getClassNameRounded } from '../../services/application';
import { iconSuccess, iconError, iconWarning, iconInfo } from '../../assets/constant';
import Icon from '../Icon';

const Alert: FunctionComponent<AlertClassType> = ({
  id,
  className,
  style,
  children,
  dark,
  light,
  color,
  width,
  height,
  minHeight,
  minWidth,
  maxWidth,
  maxHeight,
  elevation,
  outlined,
  rounded = true,
  relative,
  absolute,
  statik,
  fixed,
  sticky,
  success,
  info,
  warning,
  error,
  model,
  closeSlot,
  iconSlot,
}) => {
  const [display, setDisplay] = useState(true);
  const [icon, setIcon] = useState('');

  useEffect(() => {
    if (model !== undefined) {
      setDisplay(model);
    }
  }, [model]);

  useEffect(() => {
    if (success) setIcon(iconSuccess);
    if (warning) setIcon(iconWarning);
    if (error) setIcon(iconError);
    if (info) setIcon(iconInfo);
    if (!success && !warning && !error && !info) setIcon('');
  }, [success, warning, error, info]);

  const classList = [
    { el: 'theme--light', val: light },
    { el: 'theme--dark', val: dark },
    { el: 'mkt-alert--success', val: success },
    { el: 'mkt-alert--info', val: info },
    { el: 'mkt-alert--warning', val: warning },
    { el: 'mkt-alert--error', val: error },
    { el: 'mkt-alert--outlined', val: outlined },
    { el: 'mkt-alert--relative', val: relative },
    { el: 'mkt-alert--absolute', val: absolute },
    { el: 'mkt-alert--statik', val: statik },
    { el: 'mkt-alert--fixed', val: fixed },
    { el: 'mkt-alert--sticky', val: sticky },
    { el: getClassNameElevation(2, elevation), val: elevation !== undefined && !outlined },
    { el: getClassNameRounded(true, rounded), val: rounded !== undefined },
    {
      el: getClassNameColorScheme(color, dark, light, undefined, outlined),
      val: color !== undefined,
    },
  ];

  const styleList = {
    width: useSize(width),
    height: useSize(height),
    minWidth: useSize(minWidth),
    maxWidth: useSize(maxWidth),
    minHeight: useSize(minHeight),
    maxHeight: useSize(maxHeight),
  };

  return (
    <Fragment>
      {display ? (
        <div id={id} className={useClassName('mkt-alert', className, classList)} style={useStyle(styleList, style)}>
          <span className="mkt-alert--underlay" />
          <div className="mkt-alert--border" />
          <div className="mkt-alert--wrapper">
            {iconSlot || icon !== '' || icon !== undefined ? (
              <div className="mkt-alert--icon">{iconSlot ? iconSlot : <Icon icon={icon} />}</div>
            ) : null}

            <div className="mkt-alert--content">
              <Fragment>{children}</Fragment>
            </div>
            {closeSlot ? <div className="mkt-alert--close">{closeSlot}</div> : null}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

class AlertClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  dark?: boolean;
  light?: boolean;
  color?: string;
  width?: SizeHTML;
  height?: SizeHTML;
  minWidth?: SizeHTML;
  minHeight?: SizeHTML;
  maxWidth?: SizeHTML;
  maxHeight?: SizeHTML;
  outlined?: boolean;
  rounded?: RoundedClass;
  elevation?: ElevationClass;
  relative?: boolean;
  absolute?: boolean;
  statik?: boolean;
  fixed?: boolean;
  sticky?: boolean;

  success?: boolean;
  info?: boolean;
  warning?: boolean;
  error?: boolean;
  model?: boolean;
  closeSlot?: ElementChildrenType;
  iconSlot?: ElementChildrenType;
}

export default Alert;
