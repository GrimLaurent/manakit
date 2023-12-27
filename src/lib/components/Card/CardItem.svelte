<script lang="ts">
	import { className, styleName } from '../../utils';
	import type { CardDensity } from './Card.types.ts';

	export let color: string | undefined = undefined;
	export let background: string | undefined = undefined;
	export let density: CardDensity = 'default';

	$: classList = [
		{ class: `card-item`, value: true },
		{ class: `density-${density}`, value: density }
	];

	$: styleList = [
		{ property: `background`, value: background },
		{ property: `color`, value: color }
	];

	$: idHtml = $$props.id;
	$: classHtml = className(undefined, $$props.class, classList);
	$: styleHtml = styleName($$props.style, styleList);
</script>

<div id={idHtml} class={classHtml} style={styleHtml}>
	<!-- slot: prepend -->
	{#if $$slots.prepend}
		<div class="card-item--prepend">
			<slot name="prepend" />
		</div>
	{/if}
	<!-- slot: default -->
	<div class="card-item--content">
		<slot />
	</div>
	<!-- slot: append -->
	{#if $$slots.append}
		<div class="card-item--append">
			<slot name="append" />
		</div>
	{/if}
</div>

<style>
	.card-item {
		align-items: center;
		display: grid;
		flex: none;
		grid-template-areas: 'prepend content append';
		grid-template-columns: max-content auto max-content;
		padding: 0.625rem 1rem;
	}

	.card-item--prepend {
		grid-area: prepend;
		padding-inline-end: 1rem;
	}

	.card-item--append {
		grid-area: append;
		padding-inline-start: 1rem;
	}

	.card-item--content {
		align-self: center;
		grid-area: content;
		overflow: hidden;
	}

	.card-item--content :global([class*='card-title']) {
		padding: 0;
	}

	.card-item--content :global([class*='card-subtitle']) {
		padding: 0 0 0.25rem;
	}
</style>
