/**
 * App
 *
 * @description App is a basic module that allows you to display content in line with the manakit theme and to ensure the effects of transitions and placement for the content.
 * @type Structural
 * @module App
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './App.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { AppType } from './types/App';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../utils';

const App: FunctionComponent<AppType> = ({ id, className, style, children, noSSR }) => {
  if (noSSR) {
    const [render, setRender] = useState(null) as any;

    useEffect(() => {
      // fix Hydration failed because the initial UI does not match what was rendered on the server
      setRender(
        <Structural id={id} className={className} style={style}>
          {children}
        </Structural>,
      );
    }, []);

    return render;
  } else {
    return (
      <Structural id={id} className={className} style={style}>
        {children}
      </Structural>
    );
  }
};

export default App;

/**
 * Structural
 * @param className
 * @param style
 * @param children
 * @returns React.ReactNode | React.ReactChild[]
 */
const Structural: FunctionComponent<AppType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div
        id={useIdHtml('app', id)}
        className={useClassHtml(`mk-app`, className)}
        style={useStyleHtml({}, style)}
        data-app="true"
      >
        <div className={useClassHtml(`mk-app--wrap`)}>{children}</div>
      </div>
    </Fragment>
  );
};
