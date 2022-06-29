import '../../assets/scss/global.scss';
import React, { Fragment, FunctionComponent } from 'react';
import ManakitType from './types/Manakit.types';

const isSSR = () => typeof window === 'undefined';

const ManaKit: FunctionComponent<ManakitType> = ({ children }) => {
  // if (typeof window === "undefined") {
  //   return null;
  // } // fix hydratation

  //   useState(typeof window === "undefined");

  // const [isInFavorites, setIsInFavorites] = useState(typeof window === "undefined" && OTHER CODE HERE));

  //   const isSSR = typeof window === "undefined"
  // à

  // const [isSSR, setIsSSR] = useState(true);

  // useEffect(() => {
  // 	setIsSSR(false);
  // }, []);
  // Ensuite, dans mon jsx, je peux faire
  // { !isSSR && <div....

  return !isSSR() && (children as any);
};

export default ManaKit;
