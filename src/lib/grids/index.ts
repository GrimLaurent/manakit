import { gridsAutoColumnClass } from './gridsAutoColumn';
import { gridsAutoFlowClass } from './gridsAutoFlow';
import { gridsAutoRowClass } from './gridsAutoRow';
import { gridsColsClass } from './gridsCols';
import { gridsColsStartEndClass } from './gridsColsStartEnd';
import { gridsRowsClass } from './gridsRows';
import { gridsRowsStartEndClass } from './gridsRowsStartEnd';

export const gridsClass = ({ screen }: { screen: string }) => {
	let css = '';
	// class
	css += gridsColsClass({ screen });
	css += gridsColsStartEndClass({ screen });
	css += gridsRowsClass({ screen });
	css += gridsRowsStartEndClass({ screen });
	css += gridsAutoFlowClass({ screen });
	css += gridsAutoColumnClass({ screen });
	css += gridsAutoRowClass({ screen });
	return css;
};
