import fs from 'fs/promises';
import { SetManakitConfig } from '../../types';

export async function setConfig({ path, dest }: SetManakitConfig) {
	await fs.copyFile(path, dest);
}
