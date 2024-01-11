<script lang="ts">
	import { classMap, styleMap } from '../../utils';
</script>

{#if $$props.submenu}
	<details id={$$props.id}>
		<!-- slot: summary -->
		{#if $$slots.summary}
			<slot name="summary" />
		{/if}

		<slot />
	</details>
{:else}
	<ul
		id={$$props.id}
		class={classMap({
			component: 'menu',
			default: $$props.class,
			'menu-is-horizontal': $$props.horizontal,
			'menu-is-vertical': $$props.vertical
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
	>
		<slot />
	</ul>
{/if}

<style>
	:global(ol),
	:global(ul),
	.menu {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.menu {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		font-size: 0.875rem;
		line-height: 1.25rem;
		padding: 0.5rem;
	}

	:global(:where(.menu li)) {
		position: relative;
		display: flex;
		flex-shrink: 0;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: stretch;
	}

	:global(:where(.menu li ul)) {
		position: relative !important;
		white-space: nowrap !important;
		margin-inline-start: 1rem !important;
		padding-inline-start: 0.5rem !important;
	}

	:global(:where(.menu li ul)::before) {
		position: absolute;
		bottom: 0.75rem;
		inset-inline-start: 0;
		top: 0.75rem;
		width: 1px;
		background-color: #2d333a;
		opacity: 0.6;
		content: '';
	}

	.menu-is-horizontal {
		display: inline-flex;
		flex-direction: row;
	}

	.menu-is-vertical {
		display: flex;
		flex-direction: column;
	}

	details summary {
		display: grid;
		grid-auto-flow: column;
		align-content: flex-start;
		align-items: center;
		gap: 0.5rem;
		grid-auto-columns: minmax(auto, max-content) auto max-content;
		-webkit-user-select: none;
		user-select: none;

		border-radius: var(--rounded-btn, 0.5rem);
		padding: 0.5rem 1rem;
		text-align: start;
		transition-property:
			color,
			background-color,
			border-color,
			text-decoration-color,
			fill,
			stroke,
			opacity,
			box-shadow,
			transform,
			filter,
			-webkit-backdrop-filter;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
			opacity, box-shadow, transform, filter, backdrop-filter;
		transition-property:
			color,
			background-color,
			border-color,
			text-decoration-color,
			fill,
			stroke,
			opacity,
			box-shadow,
			transform,
			filter,
			backdrop-filter,
			-webkit-backdrop-filter;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		transition-duration: 0.2s;
		text-wrap: balance;
	}

	details summary::after {
		justify-self: end;
		display: block;
		margin-top: -0.5rem;
		height: 0.5rem;
		width: 0.5rem;
		transform: rotate(45deg);
		transition-property: transform, margin-top;
		transition-duration: 0.3s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		content: '';
		transform-origin: 75% 75%;
		box-shadow: 2px 2px;
		pointer-events: none;
	}

	details[open] summary::after {
		transform: rotate(225deg);
		margin-top: 0;
	}
</style>
