export interface RootVar {
	slug: string;
	value: string | number;
}

export interface PropertieCSS {
	key: string;
	value: unknown;
	important?: boolean;
}

export interface ClassCSS {
	className: string;
	properties: { [key: string]: string | number | unknown };
	important?: boolean;
	screen?: string;
}

export interface RootCSS {
	variables: { [key: string]: string | number };
	className?: string;
	scheme?: string;
}
