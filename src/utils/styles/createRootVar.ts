import { RootVar } from '../../types';

export const rootVar = ({ section, slug, value }: RootVar) => {
	return `--${section}-${slug}: ${value};\n`;
};
