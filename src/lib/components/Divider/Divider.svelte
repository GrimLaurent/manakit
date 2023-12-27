<script lang="ts">
	import { className, styleName } from '../../utils';

	// props
	export let inset: boolean = false;
	export let vertical: boolean = false;
	export let background: string | undefined = undefined;

	$: classList = [
		{ class: `divider`, value: true },
		{ class: `is-inset`, value: inset },
		{ class: `is-vertical`, value: vertical }
	];

	$: styleList = [{ property: `background`, value: background }];

	$: idHtml = $$props.id;
	$: classHtml = className(undefined, $$props.class, classList);
	$: styleHtml = styleName($$props.style, styleList);
</script>

<hr id={idHtml} class={classHtml} style={styleHtml} />

<style>
	hr {
		overflow: visible;
	}

	.divider {
		display: block;
		flex: 1 1 100%;
		height: 0px;
		max-height: 0px;
		opacity: var(--dal-border-opacity);
		transition: inherit;
		border-style: solid;
		border-width: thin 0 0 0;
	}

	.divider.is-vertical {
		align-self: stretch;
		border-width: 0 thin 0 0;
		display: inline-flex;
		height: inherit;
		margin-left: -1px;
		max-height: 100%;
		max-width: 0px;
		vertical-align: text-bottom;
		width: 0px;
	}

	.divider.is-inset:not(.is-vertical) {
		max-width: calc(100% - 72px);
		margin-inline-start: 72px;
	}
</style>
