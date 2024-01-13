<script lang="ts">
	import { classMap, styleMap } from '../../utils';
	import Component from './button.module.svelte';
</script>

{#if $$props.href}
	<!-- svelte-ignore a11y-missing-attribute -->
	<a {...$$props}>
		<Component>
			<slot />
		</Component>
	</a>
{:else}
	<button
		id={$$props.id}
		class={classMap({
			component: 'btn',
			default: $$props.class,
			'btn-is-text': $$props.text,
			'btn-is-link': $$props.link
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
		{...$$props}
	>
		<Component>
			<slot />
		</Component>
	</button>
{/if}

<style>
	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.btn {
		--btn-color: #191e25;
		display: inline-flex;
		height: 3rem;
		min-height: 3rem;
		flex-shrink: 0;
		cursor: pointer;
		-webkit-user-select: none;
		user-select: none;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		border-radius: var(--rounded-btn, 0.5rem);
		border-color: transparent;
		border-color: var(--btn-color);
		padding-left: 1rem;
		padding-right: 1rem;
		text-align: center;
		font-size: 0.875rem;
		line-height: 1em;
		gap: 0.5rem;
		font-weight: 600;
		text-decoration-line: none;
		transition-duration: 0.2s;
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		border-width: var(--border-btn, 1px);
		animation: button-pop var(--animation-btn, 0.25s) ease-out;
		transition-property: color, background-color, border-color, opacity, box-shadow, transform;
		color: var(--color-text);
		outline-color: var(--btn-color);
		background-color: var(--btn-color);
	}

	.btn:hover:not(.btn-is-link):not(.btn-is-text) {
		--btn-hover-color: #14191e;
		background-color: var(--btn-hover-color);
		border-color: var(--btn-hover-color);
	}

	.btn-is-text {
		border-width: 1px;
		border-color: transparent !important;
		background-color: transparent !important;
		color: currentColor;
		outline-color: currentColor;
	}

	.btn-is-text:hover {
		background-color: #3d434b;
		border-color: transparent;
	}

	.btn-is-link {
		border-color: transparent;
		background-color: transparent;
		--tw-text-opacity: 1;
		color: var(--fallback-p, oklch(var(--p) / var(--tw-text-opacity)));
		text-decoration-line: underline;
		--tw-shadow: 0 0 #0000;
		--tw-shadow-colored: 0 0 #0000;
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow);
		outline-color: currentColor;
	}

	@keyframes button-pop {
		0% {
			transform: scale(var(--btn-focus-scale, 0.98));
		}

		40% {
			transform: scale(1.02);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
