/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs/promises';
import path from 'path';
import preset from '../../presets/default';
import { formatProperties } from './utils';

export const pathCssPackage = path.resolve(`node_modules/manakit/dist`, 'app.css');

// styles files
import setRootCSS from '../../styles/root';
import setClassTheme from '../../styles/theme';
import setClassDisplay from '../../styles/display';
import setClassShadow from '../../styles/shadow';
import setClassColumns from '../../styles/colums';
import setClassOrder from '../../styles/order';
import setClassMargin from '../../styles/margin';
import setClassPadding from '../../styles/padding';
import setClassAutoMargin from '../../styles/autoMargin';
import setClassFlex from '../../styles/flex';
import setClassFlexAlign from '../../styles/flexAlign';
import setClassFlexAlignContent from '../../styles/flexAlignContent';
import setClassFlexAlignSelf from '../../styles/flexAlignSelf';
import setClassFlexDirection from '../../styles/flexDirection';
import setClassFlexGrowShrink from '../../styles/flexGrowShrink';
import setClassFlexJustify from '../../styles/flexJustify';
import setClassFlexShortland from '../../styles/flexShortland';
import setClassFlexWrap from '../../styles/flexWrap';
import setClassFloat from '../../styles/float';
import setNormalizeCss from '../../styles/normalize';
import setClassRounded from '../../styles/rounded';
import setClassWidth from '../../styles/width';
import setClassHeight from '../../styles/height';
import setClassTextAlign from '../../styles/textAlign';
import setClassTextDecoration from '../../styles/textDecoration';
import setClassTextOpacity from '../../styles/textOpacity';
import setClassTextTransform from '../../styles/textTransform';

export function buildCSSFile(config: any) {
	let response = '';

	// params
	const excludeCss = config?.exclude ? config?.exclude : [];
	const breakpoint = preset!.screens;

	response += setRootCSS({
		data: formatProperties(preset.colors, config?.theme?.colors),
		dark: config?.dark || preset.dark
	});

	if (config?.normalize !== undefined ? config?.normalize : true) {
		response += setNormalizeCss();
	}

	if (!excludeCss.includes(''))
		if (!excludeCss.includes('theme')) {
			response += setClassTheme(preset);
		}
	if (!excludeCss.includes('display')) {
		response += setClassDisplay({ data: preset.variables.display });
	}
	if (!excludeCss.includes('shadow')) {
		response += setClassShadow({ data: preset.variables.shadow });
	}
	if (!excludeCss.includes('grids')) {
		response += setClassColumns({ data: {}, value: preset.variables.grids });
		response += setClassOrder({
			data: preset.variables.order
		});
	}
	if (!excludeCss.includes('spacings')) {
		response += setClassMargin({ data: preset.variables.margin });
		response += setClassPadding({ data: preset.variables.padding });
		response += setClassAutoMargin({ data: {} });
	}
	if (!excludeCss.includes('flex')) {
		response += setClassFlex({ data: preset.variables.flex });
		response += setClassFlexAlign({ data: preset.variables.flexAlign });
		response += setClassFlexAlignContent({
			data: preset.variables.alignContent
		});
		response += setClassFlexAlignSelf({ data: preset.variables.flexAlignSelf });
		response += setClassFlexDirection({ data: preset.variables.flexDirection });
		response += setClassFlexGrowShrink({
			data: preset.variables.flexGrowShrink
		});
		response += setClassFlexJustify({ data: preset.variables.flexJustify });
		response += setClassFlexShortland({ data: preset.variables.flexShorthand });
		response += setClassFlexWrap({ data: preset.variables.flexWrap });
	}

	if (!excludeCss.includes('float')) {
		response += setClassFloat({ data: preset.variables.float });
	}

	if (!excludeCss.includes('normalize')) {
		setNormalizeCss();
	}

	if (!excludeCss.includes('rounded')) {
		response += setClassRounded({ data: preset.borderRadius });
	}

	if (!excludeCss.includes('sizing')) {
		response += setClassWidth({ data: preset.variables.width });
		response += setClassHeight({
			data: preset.variables.height
		});
	}

	if (!excludeCss.includes('typography')) {
		response += setClassTextAlign({ data: preset.variables.textAlign });
		response += setClassTextDecoration({ data: preset.variables.textDecoration });
		response += setClassTextOpacity({ data: preset.variables.textOpacity });
		response += setClassTextTransform({ data: preset.variables.textTransform });
	}

	for (const [key, value] of Object.entries(breakpoint!)) {
		response += `@media screen and (min-width: ${value}) {\n`;

		// with breakpoint
		if (!excludeCss.includes('display')) {
			response += setClassDisplay({
				screen: key,
				data: preset.variables.display
			});
		}

		if (!excludeCss.includes('grids')) {
			response += setClassColumns({
				screen: key,
				data: {},
				value: preset.variables.grids
			});

			response += setClassOrder({
				screen: key,
				data: preset.variables.order
			});
		}

		if (!excludeCss.includes('spacings')) {
			response += setClassMargin({
				screen: key,
				data: preset.variables.margin
			});
			response += setClassPadding({
				screen: key,
				data: preset.variables.padding
			});
			response += setClassAutoMargin({ screen: key, data: {} });
		}

		if (!excludeCss.includes('flex')) {
			response += setClassFlex({ screen: key, data: preset.variables.flex });
			response += setClassFlexAlign({
				screen: key,
				data: preset.variables.flexAlign
			});
			response += setClassFlexAlignContent({
				screen: key,
				data: preset.variables.alignContent
			});
			response += setClassFlexAlignSelf({
				screen: key,
				data: preset.variables.flexAlignSelf
			});
			response += setClassFlexDirection({
				screen: key,
				data: preset.variables.flexDirection
			});
			response += setClassFlexGrowShrink({
				screen: key,
				data: preset.variables.flexGrowShrink
			});
			response += setClassFlexJustify({
				screen: key,
				data: preset.variables.flexJustify
			});
			response += setClassFlexShortland({
				screen: key,
				data: preset.variables.flexShorthand
			});
			response += setClassFlexWrap({
				screen: key,
				data: preset.variables.flexWrap
			});
		}

		if (!excludeCss.includes('float')) {
			response += setClassFloat({ screen: key, data: preset.variables.float });
		}

		if (!excludeCss.includes('rounded')) {
			response += setClassRounded({ screen: key, data: preset.borderRadius });
		}

		if (!excludeCss.includes('sizing')) {
			response += setClassWidth({ screen: key, data: preset.variables.width });
			response += setClassHeight({
				screen: key,
				data: preset.variables.height
			});
		}

		response += '}\n\n';
	}

	fs.writeFile(pathCssPackage, response);
}
