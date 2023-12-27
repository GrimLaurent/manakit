/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Preset {
	dark: boolean;
	colors: {
		[key: string]: string | undefined | { light?: string; dark?: string };
	};
	fontFamily: {
		[key: string]: string | undefined;
	};
	screens: {
		[key: string]: string | undefined;
	};
	borderRadius: {
		[key: string]: string | undefined;
	};
	variables: {
		display: {
			[key: string]: string | undefined;
		};
		shadow: {
			[key: string]: Array<string>;
		};
		grids: number;
		margin: Array<string | number>;
		padding: Array<number>;
		flex: { [key: string]: string | undefined };
		alignContent: { [key: string]: string | undefined };
		flexShorthand: { [key: string]: string | undefined };
		flexDirection: { [key: string]: string | undefined };
		flexJustify: { [key: string]: string | undefined };
		flexAlign: { [key: string]: string | undefined };
		flexAlignSelf: { [key: string]: string | undefined };
		flexWrap: { [key: string]: string | undefined };
		flexGrowShrink: { [key: string]: string | number | undefined };
		float: { [key: string]: string | undefined };
		order: { [key: string]: string | number };
		height: { [key: string]: string | number };
		width: { [key: string]: string | number };
	};
}

export interface keyClassCSS {
	[key: string]: string | undefined;
}

export interface generateClass {
	screen?: string;
	data:
		| (string | number)[]
		| {
				[key: string | number]: string | number | Array<string | number> | undefined;
		  };
	value?: number;
}
