import { prefix } from '../../constant';
import { RootVar } from '../../types';

export const createRootVar = ({ slug, value }: RootVar) => {
	return `--${prefix}-${slug}: ${value};\n`;
};
