import fs from 'fs/promises';

export async function getConfig({ path }: GetProjectConfigType) {
	const file = await fs.readFile(path, 'utf-8');
	const defaultExportMatch = file.match(/export\s+default\s+(\{[^]*?\});/);
	let defaultValue = null;

	if (defaultExportMatch && defaultExportMatch.length > 1) {
		const exportCode = `return ${defaultExportMatch[1]}`;
		const defaultExportFunction = new Function(exportCode);
		defaultValue = defaultExportFunction();
	}

	return defaultValue;
}

interface GetProjectConfigType {
	path: string;
}
