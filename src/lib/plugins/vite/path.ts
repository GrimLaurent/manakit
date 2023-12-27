import path from 'path';

const rootDir = process.cwd();

export const pathCssPackage = path.resolve(`node_modules/manakit/dist`, 'app.css');
// export const pathCssPackageMin = path.resolve(`node_modules/manakit/dist`, 'style.min.css');
export const pathDefaultConfig = path.resolve(`node_modules/manakit/dist-vite`, '.manakit.cjs');
export const pathRootConfig = path.resolve(rootDir, '.manakit.cjs');

// in project
export const configurationPathRoot = path.resolve(rootDir, '.manakit.cjs');
