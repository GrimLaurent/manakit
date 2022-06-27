import '../../assets/scss/global.scss';
import React, { Fragment, FunctionComponent } from 'react';
import ManakitType from './types/Manakit.types';

const ManaKit: FunctionComponent<ManakitType> = ({ children, ...props }) => {
  if (typeof window === 'undefined') {
    return null;
  } // fix hydratation

  return (
    <Fragment>
      <div id="manakit" className="manakit-ui">
        {children}
      </div>
    </Fragment>
  );
};

export default ManaKit;
