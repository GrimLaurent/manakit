import { prefix } from '../../constant';
import { VarRoot } from '../../types';

export const createRootVar = ({ slug, value }: VarRoot) => {
	return `--${prefix}-${slug}: ${value};\n`;
};
