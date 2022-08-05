/**
 * ManakitLocalStorage
 * @description generate LocalStorage for user settings
 *
 * @param localKey(string)
 */
import { setElementStorage } from '../../utils';

const ManakitLocalStorage = (localKey: string) => {
  // default
  const structure: any = {
    theme: {
      dark: false,
      system: false,
    },
  };

  setElementStorage(localKey, structure);
};

export default ManakitLocalStorage;
