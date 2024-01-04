<script lang="ts">
	import type { Theme } from '$lib/types';
	import { classMap, styleMap } from '../../utils';

	export let theme: Theme = undefined;
	export let shadow: string | boolean | undefined = undefined;
	export let rounded: string | boolean | undefined = undefined;
	export let hover: boolean = false;
	export let link: boolean = false;

	// style
	export let outlined: boolean = false;
	export let text: boolean = false;
	export let compact: boolean = false;
	export let image: boolean = false;

	// state
	$: innerWidth = 0;
	$: innerHeight = 0;
	$: isHover = false;
	$: isHoverLink = false;

	const handleMouseHover = (state: boolean) => {
		if ($$props.disabled) return;
		link ? (isHoverLink = state) : hover && (isHover = state);
	};
</script>

<svelte:window bind:innerWidth bind:innerHeight />
{innerWidth}
{innerHeight}
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	id={$$props.id}
	class={classMap({
		component: 'card',
		default: $$props.class,
		'card-is-disabled': $$props.disabled,
		'card-is-active': $$props.active,
		'card-is-outlined': outlined,
		'card-is-text': text,
		'card-is-compact': compact,
		'card-is-image': image,
		shadow: shadow || (isHover && 'xl'),
		rounded: rounded || true,
		theme: theme
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color,
		sizing: [$$props, [innerWidth, innerHeight]]
	})}
	role={$$props.role}
	tabindex={$$props.tabindex}
	on:mouseenter={() => handleMouseHover(true)}
	on:mouseleave={() => handleMouseHover(false)}
	on:click
>
	<!-- slot: hover -->
	{#if isHoverLink}
		{#if $$slots.hover}
			<slot name="hover" />
		{:else}
			<span class="hover" />
		{/if}
	{/if}

	<!-- slot: active -->
	{#if $$props.active}
		{#if $$slots.active}
			<slot name="active" />
		{:else}
			<span class="active" />
		{/if}
	{/if}

	<!-- slot: default -->
	<slot />
</div>

<style>
	.card {
		display: block;
		overflow: hidden;
		overflow-wrap: break-word;
		position: relative;
		padding: 0;
		z-index: 0;
		border-style: solid;
		border-width: 0;
		background: var(--color-surface);
		color: var(--color-text);
	}

	.card-is-compact {
		--padding-card: 1rem;
	}

	.card-is-image {
		display: grid;
	}
	.card-is-image > :global(*),
	.card-is-image:before {
		grid-column-start: 1;
		grid-row-start: 1;
	}

	.card-is-outlined {
		border-width: thin;
		border-style: solid;
	}

	.card-is-text {
		background: transparent !important;
	}

	.card-is-disabled {
		pointer-events: none;
		user-select: none;
	}

	.card-is-disabled :global(*) {
		opacity: 0.38;
	}

	.hover {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: currentColor;
		pointer-events: none;
		opacity: 0.38;
	}

	.active {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: currentColor;
		pointer-events: none;
		opacity: 0.18;
	}

	:global(img) {
		max-width: 100%;
		height: auto;
	}
</style>
