import { getElementStorage, setElementStorage } from '../../utils';

const useDarkMode = (mode?: boolean) => {
  const local = getElementStorage(`_muid`);

  if (mode !== undefined) {
    local.theme.dark = mode;
  } else {
    local.theme.dark = local.theme.dark ? false : true;
  }

  // force disabled system
  local.theme.system = false;

  setElementStorage(`_muid`, local);

  console.log('useDarkMode func');
  // Event
  window.dispatchEvent(new Event('mana-theme'));

  // fix temp
  location.reload();
};

export default useDarkMode;
