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
import React, { FunctionComponent, useEffect, useState } from 'react';
import { AppType } from './types/App.types';

// Components
import Structural from './components/App.structural';

const App: FunctionComponent<AppType> = ({ className, style, children, dark, light, noSSR }) => {
  if (noSSR) {
    const [render, setRender] = useState(null) as any;

    useEffect(() => {
      // fix Hydration failed because the initial UI does not match what was rendered on the server
      setRender(
        <Structural className={className} style={style} dark={dark} light={light}>
          {children}
        </Structural>,
      );
    }, []);

    return render;
  } else {
    return (
      <Structural className={className} style={style} dark={dark} light={light}>
        {children}
      </Structural>
    );
  }
};

export default App;
