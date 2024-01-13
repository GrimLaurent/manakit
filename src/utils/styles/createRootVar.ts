import { prefix } from '../../constant';

export const createRootVar = ({ slug, value }: any) => {
	return `--${prefix}-${slug}: ${value};\n`;
};
