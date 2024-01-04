<script lang="ts">
	import { className, styleName } from '../../utils';
	import type { CardElevated, CardRounded, CardTarget } from './Card.types.ts';

	// props
	export let color: string | undefined = undefined;
	export let background: string | undefined = undefined;
	export let elevation: CardElevated | undefined = true;
	export let shadow: string | boolean | undefined = 'xxl';
	export let width: string | number | undefined = undefined;
	export let height: string | number | undefined = undefined;
	export let minWidth: string | number | undefined = undefined;
	export let maxWidth: string | number | undefined = undefined;
	export let minHeight: string | number | undefined = undefined;
	export let maxHeight: string | number | undefined = undefined;
	export let rounded: CardRounded | undefined = undefined;
	export let href: string | undefined = undefined;
	export let target: CardTarget = undefined;
	export let role: 'button' | undefined = undefined;
	export let theme: 'dark' | 'light' | undefined = undefined;
	export let disabled: boolean = false;
	export let loading: boolean = false;
	export let active: boolean = false;

	$: isDisabled = loading ? loading : disabled;
	$: isHover = false;
	$: isClick = false;

	$: classList = [
		{ class: `card`, value: true },
		{ class: `elevation-2`, value: typeof elevation === 'boolean' && elevation },
		{ class: `elevation-${elevation}`, value: typeof elevation !== 'boolean' && elevation },
		{ class: `shadow`, value: typeof shadow === 'boolean' && shadow },
		{ class: `shadow-${shadow}`, value: typeof shadow !== 'boolean' && shadow },
		{ class: `rounded`, value: typeof rounded === 'boolean' && rounded },
		{ class: `rounded-${rounded}`, value: typeof rounded !== 'boolean' && rounded },
		{ class: `is-disabled`, value: isDisabled },
		{ class: `is-loading`, value: loading },
		{ class: `is-active`, value: active },
		{ class: `${theme}`, value: theme }
	];

	$: classHoverList = [
		{ class: `card-hover`, value: true },
		{ class: `rounded`, value: typeof rounded === 'boolean' && rounded },
		{ class: `rounded-${rounded}`, value: typeof rounded !== 'boolean' && rounded }
	];

	$: classActiveList = [
		{ class: `card-active`, value: true },
		{ class: `rounded`, value: typeof rounded === 'boolean' && rounded },
		{ class: `rounded-${rounded}`, value: typeof rounded !== 'boolean' && rounded }
	];

	$: styleList = [
		{ property: `background`, value: background },
		{ property: `color`, value: color },
		{ property: `width`, value: width },
		{ property: `height`, value: height },
		{ property: `min-width`, value: minWidth },
		{ property: `max-width`, value: maxWidth },
		{ property: `min-height`, value: minHeight },
		{ property: `max-height`, value: maxHeight }
	];

	function handleHover(params: boolean) {
		isHover = params;
	}

	$: idHtml = $$props.id;
	$: classHtml = className($$props.class, classList);
	$: classHoverHtml = className(undefined, classHoverList);
	$: classActiveHtml = className(undefined, classActiveList);
	$: styleHtml = styleName($$props.style, styleList);

	console.log('Card props', $$props);
</script>

{#if href}
	<a
		id={idHtml}
		class={classHtml}
		style={styleHtml}
		{href}
		{target}
		on:mouseenter={() => handleHover(true)}
		on:mouseleave={() => handleHover(false)}
	>
		{#if isHover && !isDisabled && !loading}
			<span class={classHoverHtml} />
		{/if}
		{#if active && !isDisabled && !loading}
			<span class={classActiveHtml} />
		{/if}
		<!-- slot: loading -->
		{#if loading}
			<span class="btn-loading">
				<slot name="loading">Loading</slot>
			</span>
		{/if}
		<div class="card-content">
			<!-- slot: default -->
			<slot />
		</div>
	</a>
{:else}
	<div
		id={idHtml}
		class={classHtml}
		style={styleHtml}
		{role}
		on:click
		on:mouseenter={() => handleHover(true)}
		on:mouseleave={() => handleHover(false)}
	>
		{#if isClick && isHover && !isDisabled && !loading}
			<span class={classHoverHtml} />
		{/if}
		{#if isClick && active && !isDisabled && !loading}
			<span class={classActiveHtml} />
		{/if}
		<!-- slot: loading -->
		{#if loading}
			<span class="card-loading">
				<slot name="loading">Loading</slot>
			</span>
		{/if}
		<div class="card-content">
			<!-- slot: default -->
			<slot />
		</div>
	</div>
{/if}

<style>
	a {
		text-decoration: none;
	}

	.card[role='button'] {
		cursor: pointer;
	}

	.card {
		display: block;
		overflow: hidden;
		overflow-wrap: break-word;
		position: relative;
		padding: 0;
		text-decoration: none;
		transition-duration: 0.28s;
		transition-property: box-shadow, opacity, background;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		z-index: 0;
		border-style: solid;
		border-width: 0;
		border-radius: 4px;
		background: var(--color-surface);
		color: var(--color-text);
	}

	.card :global([class*='card-text']) {
		line-height: 1.25rem;
	}

	.card :global([class*='card-title']) {
		line-height: 2rem;
	}

	.card :global([class*='card-subtitle']) {
		line-height: 1.25rem;
	}

	.card .card-hover,
	.card .card-active {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		background: currentColor;
	}

	.card .card-hover {
		opacity: 0.08;
	}

	.card .card-active {
		opacity: 0.14;
	}

	.card.is-disabled:not(.is-loading) {
		pointer-events: none;
		user-select: none;
		opacity: 0.6;
	}

	.card.is-disabled.is-loading {
		pointer-events: none;
		user-select: none;
	}

	.card.is-loading .card-content {
		opacity: 0;
		pointer-events: none;
		user-select: none;
	}

	.card .card-loading {
		display: flex;
		position: absolute;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		pointer-events: none;
		user-select: none;
	}
</style>
