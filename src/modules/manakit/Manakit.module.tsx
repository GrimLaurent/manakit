import '../assets/scss/global.scss';
import React, { Fragment, FunctionComponent } from 'react';
import ManakitType from './types/Manakit.types';

const ManaKit: FunctionComponent<ManakitType> = ({ ...props }) => {
  if (typeof window === 'undefined') {
    return null;
  } // fix hydratation
  console.log('MANAKIT =>', props);
  return (
    <Fragment>
      <div id="manakit" className="manakit-ui">
        {props.children}
      </div>
    </Fragment>
  );
};

export default ManaKit;
