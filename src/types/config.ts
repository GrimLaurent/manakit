export interface GetManakitConfig {
	path: string;
}

export interface SetManakitConfig {
	path: string;
	dest: string;
}

export interface Themes {
	[key: string]: { [key: string]: string | { [key: string]: string } };
}
