<script lang="ts">
	import { className, styleName } from '../../utils';

	// props
	export let color: string | undefined = undefined;
	export let background: string | undefined = undefined;

	$: classList = [];

	$: styleList = [
		{ property: `background`, value: background },
		{ property: `color`, value: color }
	];

	$: idBase = $$props.id;
	$: classBase = className(undefined, $$props.class, classList);
	$: styleBase = styleName($$props.style, styleList);
</script>

<div id={idBase} class={classBase} style={styleBase}>
	<div>
		<!-- slot: default -->
		<slot />
	</div>
</div>

<style>
	div {
		display: flex;
		background: var(--dal-theme-background);
		color: var(--dal-theme-text);
	}

	div > div {
		backface-visibility: hidden;
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		max-width: 100vw;
		min-height: 100vh;
		position: relative;
	}
</style>
