import fs from 'fs/promises';
import { pathCss } from './constant';

import { normalize } from './lib/normalize';
// import { btnStatic, btnResponsive } from './components/btn';
import { colorClass, colorRoot } from './lib/colors';
import { Themes } from './types';
import { sizingClass } from './lib/sizing';
import { spacingClass } from './lib/spacing';
import { layoutClass } from './lib/layout';
import { gridsClass } from './lib/grids';
import { floatClass } from './lib/float';
import { flexClass } from './lib/flex';
import { gridsFlexClass, gridsFlexStaticClass } from './lib/gridsFlex';
import { radiusClass } from './lib/radius';
import { shadowClass } from './lib/shadow';
import { fontsClass, fontsRoot, fontsStaticClass } from './lib/fonts';

export const initialResponsive = {
	none: '0',
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	xxl: '1536px'
};

export const buildCSS = ({
	dark,
	themes,
	responsive
}: {
	dark: boolean;
	themes: Themes;
	responsive: object;
}) => {
	let cssString = '';

	// root
	cssString += colorRoot({ themes, dark });
	cssString += fontsRoot();

	// class
	cssString += normalize();
	cssString += colorClass({ themes });
	cssString += gridsFlexStaticClass();
	cssString += radiusClass();
	cssString += shadowClass();
	cssString += fontsStaticClass();

	// components
	// cssString += btnStatic();

	for (const [screen, value] of Object.entries(responsive)) {
		if (screen !== 'none') cssString += `@media screen and (min-width: ${value}) {\n`;

		// class
		cssString += sizingClass({ screen });
		cssString += spacingClass({ screen });
		cssString += layoutClass({ screen });
		cssString += gridsClass({ screen });
		cssString += floatClass({ screen });
		cssString += flexClass({ screen });
		cssString += gridsFlexClass({ screen });
		cssString += fontsClass({ screen });

		// components
		// cssString += btnResponsive({ screen });
		if (screen !== 'none') cssString += '}\n\n';
	}

	fs.writeFile(pathCss, cssString);
};
