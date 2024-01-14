import { prefix } from '../../constant';
import { RootVar } from '../../types';

export const rootVar = ({ slug, value }: RootVar) => {
	return `--${prefix}-${slug}: ${value};\n`;
};
