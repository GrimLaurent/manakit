import { createClass } from '../../utils';

// class
export const modalClass = () => {
	let css = '';

	css += createClass({
		className: '.modal',
		properties: {
			'pointer-events': 'none',
			position: 'fixed',
			inset: 0,
			margin: 0,
			display: 'grid',
			height: '100%',
			width: '100%',
			'max-width': 'none',
			'max-height': 'none',
			'justify-items': 'center',
			padding: 0,
			opacity: 0,
			'overscroll-behavior': 'contain',
			'z-index': 999,
			'background-color': 'transparent',
			color: 'inherit',
			'transition-duration': '.2s',
			'overflow-y': 'hidden'
		}
	});

	css += createClass({
		className: '.modal-open, .modal:target, .modal-toggle:checked+.modal, .modal[open]',
		properties: {
			'pointer-events': 'auto',
			visibility: 'visible',
			opacity: 1
		}
	});

	css += createClass({
		className: '.modal-box',
		properties: {
			'max-height': 'calc(100vh - 5em)',
			'grid-column-start': 1,
			'grid-row-start': 1,
			width: '92%',
			'border-radius': '1rem',
			padding: '1.5rem',
			'transition-duration': '.2s',
			'box-shadow': '#00000040 0 25px 50px -12px',
			'overflow-y': 'auto',
			'overscroll-behavior': 'contain',
			'background-color': 'var(--color-surface)'
		}
	});

	css += createClass({
		className:
			'.modal:not(dialog:not(.modal-open)), .modal::backdrop, .modal[open]::backdrop, .modal-open::backdrop',
		properties: {
			'background-color': '#0006'
			// animation: 'modal-pop .2s ease-out'
		},
		important: true
	});

	css += createClass({
		className: ':where(.modal)',
		properties: {
			'align-items': 'center'
		}
	});

	// css += `@keyframes modal-pop {\n`;
	// css += '0% {\n';
	// css += 'opacity: 0\n';
	// css += '}\n';
	// css += '}\n\n';

	css += `dialog:-internal-dialog-in-top-layer::backdrop {`;
	css += 'position: fixed;\n';
	css += 'inset: 0px;\n';
	css += 'background: rgba(0, 0, 0, 0.1);\n';
	css += '}\n\n';

	return css;
};
