import { getElementStorage, setElementStorage } from '../../utils';
import { keyLocalMode, keyDark, keyLight } from '../../assets/constant';

const useDarkMode = (mode: boolean) => {
  if (mode) {
    setElementStorage(keyLocalMode, keyDark);
  } else {
    setElementStorage(keyLocalMode, keyLight);
  }

  // if (mode !== undefined) {
  //   local = mode;
  // } else {
  //   if (local === keyLight) response =   local.theme.dark = local.theme.dark ? false : true;
  // }

  // force disabled system
  // local.theme.system = false;

  // setElementStorage(`_muid`, local);

  // Event
  window.dispatchEvent(new Event('mk-theme'));

  // fix temp
  // location.reload();
};

export default useDarkMode;
