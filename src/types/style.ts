export interface RootVar {
	section: string;
	slug: string;
	value: string | number;
}

export interface PropertieCSS {
	key: string;
	value: unknown;
	important?: boolean;
}

export interface ClassCSS {
	parentClassName?: string;
	className: string;
	properties: { [key: string]: string | number | unknown };
	important?: boolean;
	screen?: string;
}

export interface RootCSS {
	name: string;
	variables: { [key: string]: string | number };
	className?: string;
	scheme?: string;
}
