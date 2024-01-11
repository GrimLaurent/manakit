<script lang="ts">
	import { classMap, styleMap } from '../../utils';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'drawer',
		'drawer-is-open': $$props.open,
		'drawer-is-end': $$props.end
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
>
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class={classMap({
			component: 'drawer-side',
			default: $$props.class
		})}
		on:click={() => console.log('drawer-overlay')}
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<label
			for="my-drawer"
			aria-label="close sidebar"
			class="drawer-overlay"
			on:click={$$props.onclose}
		></label>
		<ul class="menu" on:click={() => console.log('drawer-overlay')}>
			<slot />
		</ul>
	</div>
</div>

<style>
	.drawer {
		display: grid;
		grid-auto-columns: max-content auto;
		width: 100%;
		overflow: hidden;
		z-index: 99999;
	}

	.drawer .drawer-side {
		pointer-events: none;
		position: fixed;
		inset-inline-start: 0;
		top: 0;
		grid-column-start: 1;
		grid-row-start: 1;
		display: grid;
		width: 100%;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		grid-template-rows: repeat(1, minmax(0, 1fr));
		align-items: flex-start;
		justify-items: start;
		overflow-y: auto;
		overscroll-behavior: contain;
		height: 100vh;
		height: 100dvh;
	}

	.drawer-side > .drawer-overlay {
		position: sticky;
		top: 0;
		place-self: stretch;
		cursor: pointer;
		background-color: transparent;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		transition-duration: 0.2s;
	}

	.drawer-side > * {
		grid-column-start: 1;
		grid-row-start: 1;
	}

	.drawer-side > .menu {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		font-size: 0.875rem;
		line-height: 1.25rem;
		padding: 0.5rem;
		min-height: 100%;
		background-color: var(--color-surface);
	}

	.drawer-side > .menu {
		transform: translate(-100%);
	}

	.drawer-is-end .drawer-side {
		grid-column-start: 2;
		justify-items: end;
	}

	.drawer-is-end .drawer-side > .menu {
		transform: translate(100%);
	}

	.drawer-is-open .drawer-side {
		pointer-events: auto;
		visibility: visible;
	}

	.drawer-is-open .drawer-side > .drawer-overlay {
		background: var(--color-shadow);
		opacity: 0.42;
	}

	.drawer-is-open .drawer-side > .menu {
		transform: translate(0);
	}
</style>
