import '../../assets/scss/global.scss';
import React, { FunctionComponent, useEffect, useState } from 'react';
import ManakitType from './types/Manakit.types';

const ManaKit: FunctionComponent<ManakitType> = ({ children }) => {
  const [render, setRender] = useState(null) as any;

  // var
  const id = 'manakit-ui';

  useEffect(() => {
    // fix Hydration failed because the initial UI does not match what was rendered on the server
    setRender(<div id={id}>{children}</div>);
  }, []);

  return render;
};

export default ManaKit;
