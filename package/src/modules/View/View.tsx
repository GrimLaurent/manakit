/**
 * View
 * @type Structural
 * @module View
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment, useEffect, useState } from 'react';
import { ViewClassType } from './View.type';

// styles
import './View.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';
import { getElHTMLWidth } from '../../services/application';

const View: FunctionComponent<ViewClassType> = ({ id, className, style, children }) => {
  const [haveNavigation, setHaveNavigation]: any = useState(undefined);
  useEffect(() => {
    // control size appbar for generate spacing
    console.log('HTML init navigation', getElHTMLWidth('k-navigation', 'is-open'));

    setHaveNavigation(getElHTMLWidth('k-navigation', 'is-open'));

    window.addEventListener('resize', () => {
      console.log('HTML event navigation', getElHTMLWidth('k-navigation', 'is-open'));
      setHaveNavigation(getElHTMLWidth('k-navigation', 'is-open'));
    });
  }, []);

  const styleList = {
    padding: `0 0 0 ${useSize(haveNavigation)}`,
  };

  return (
    <Fragment>
      <main id={id} className={useClassName('k-view', className)} style={useStyle(styleList, style)} data-booted="true">
        <div className="k-view--wrap">{children}</div>
      </main>
    </Fragment>
  );
};

export default View;
