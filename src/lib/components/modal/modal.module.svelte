<script lang="ts">
	import { classMap, styleMap } from '../../utils';
	import Card from '../card/card.svelte';
	import type { Theme } from '$lib/types';

	export let theme: Theme = undefined;
	export let shadow: string | boolean | undefined = undefined;
	export let rounded: string | boolean | undefined = undefined;
</script>

<dialog
	id={$$props.id}
	class={classMap({
		component: 'modal',
		'modal-is-bottom': $$props.bottom,
		'modal-is-top': $$props.top
	})}
	open={$$props.open}
>
	<!-- <div
		class={classMap({
			component: 'modal-body',
			default: $$props.class,
			shadow: shadow || 'xl',
			rounded: rounded || 'xl',
			theme: theme
		})}
		style={styleMap({ default: $$props.style })}
	> -->
	<!-- slot: default -->
	<!-- <slot />
	</div> -->

	<Card
		class={classMap({
			component: 'modal-body',
			default: $$props.class,
			shadow: shadow || 'xl',
			rounded: rounded || 'xl',
			theme: theme
		})}
		style={styleMap({ default: $$props.style })}
		{...$$props}
	>
		<!-- slot: default -->
		<slot />
	</Card>

	<!-- close outside -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- <div tabindex="0" class="modal-backdrop" on:click role="button" /> -->
	<form method="dialog" class="modal-overlay"><button on:click>close</button></form>
</dialog>

<style>
	.modal {
		pointer-events: none;
		position: fixed;
		inset: 0;
		margin: 0;
		display: grid;
		height: 100%;
		max-height: none;
		width: 100%;
		max-width: none;
		justify-items: center;
		padding: 0;
		opacity: 0;
		border: 0;
		overscroll-behavior: contain;
		z-index: 999;
		background-color: transparent;
		color: inherit;
		transition-duration: 0.2s;
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		transition-property: transform, opacity, visibility;
		overflow-y: hidden;
	}

	:global(.modal-body) {
		/* max-height: calc(100vh - 5em); */
		grid-column-start: 1;
		grid-row-start: 1;
		/* width: 91.666667%; */
		/* max-width: 32rem; */
		/* padding: 1.5rem; */
		overflow-y: auto !important;
		overscroll-behavior: contain;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		transition-duration: 0.2s;
		/* background: var(--color-surface);
		color: var(--color-text); */
	}

	.modal-overlay {
		z-index: -1;
		grid-column-start: 1;
		grid-row-start: 1;
		display: grid;
		align-self: stretch;
		justify-self: stretch;
		color: transparent;
	}

	button {
		cursor: pointer;
		background-color: transparent;
		background-image: none;
		text-transform: none;
		font-family: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		font-size: 100%;
		font-weight: inherit;
		line-height: inherit;
		color: inherit;
		margin: 0;
		padding: 0;
		border: 0;
	}
</style>
