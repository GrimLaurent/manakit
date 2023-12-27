<script lang="ts">
	import { className, styleName } from '../../utils';

	export let color: string | undefined = undefined;
	export let background: string | undefined = undefined;

	$: classList = [{ class: `card-title`, value: true }];

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
	.card-title {
		display: block;
		flex: none;
		font-size: 1.25rem;
		font-weight: 500;
		hyphens: auto;
		min-width: 0;
		overflow-wrap: normal;
		overflow: hidden;
		padding: 0.5rem 1rem;
		text-overflow: ellipsis;
		text-transform: none;
		white-space: nowrap;
		word-break: normal;
		word-wrap: break-word;
	}
</style>
