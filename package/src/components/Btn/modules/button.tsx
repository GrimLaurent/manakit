/**
 * Button
 * @type Component to Btn
 * @module Button
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { BtnClassType } from '../Btn';

const Button: FunctionComponent<BtnClassType> = ({ children, prependIcon, appendIcon, loading }) => {
  return (
    <Fragment>
      {loading ? (
        typeof loading === 'boolean' ? (
          <span className="mkt-btn--wrap-loading">Loading ...</span>
        ) : null
      ) : null}

      <span className="mkt-btn--overlay" />

      {prependIcon ? (
        <span className="mkt-btn--prepend">
          <Fragment>{prependIcon}</Fragment>
        </span>
      ) : null}

      <span className="mkt-btn--content">
        <Fragment>{children}</Fragment>
      </span>

      {appendIcon ? (
        <span className="mkt-btn--append">
          <Fragment>{appendIcon}</Fragment>
        </span>
      ) : null}
    </Fragment>
  );
};

export default Button;
