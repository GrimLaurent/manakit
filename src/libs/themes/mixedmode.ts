import { getElementStorage, setElementStorage } from '../../utils';
import { ModeSystem } from '../../core';

export const useMixedMode = (mode?: boolean) => {
  const local = getElementStorage(`_muid`);

  if (mode !== undefined) {
    local.theme.system = mode;
  } else {
    local.theme.system = local.theme.system ? false : true;
  }

  if (local.theme.system) {
    const dark = ModeSystem();
    local.theme.dark = dark;
  }
  setElementStorage(`_muid`, local);

  // Event
  //window.dispatchEvent(new Event('mana-theme'));

  // fix temp
  location.reload();
};

export default useMixedMode;
