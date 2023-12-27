<script lang="ts">
	import { className, styleName } from '../../utils';

	export let color: string | undefined = undefined;
	export let background: string | undefined = undefined;

	$: classList = [{ class: `card-text`, value: true }];

	$: styleList = [
		{ property: `background`, value: background },
		{ property: `color`, value: color }
	];

	$: idHtml = $$props.id;
	$: classHtml = className(undefined, $$props.class, classList);
	$: styleHtml = styleName($$props.style, styleList);
</script>

<div id={idHtml} class={classHtml} style={styleHtml}>
	<!-- slot: default -->
	<slot />
</div>

<style>
	.card-text {
		flex: 1 1 auto;
		font-size: 0.875rem;
		font-weight: 400;
		letter-spacing: 0.0178571429em;
		padding: 1rem;
		text-transform: none;
	}
</style>
