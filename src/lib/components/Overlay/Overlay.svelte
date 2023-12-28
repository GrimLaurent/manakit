<script lang="ts">
</script>

<div data-component="overlay">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div on:click role="alertdialog" />
	<div>
		<slot />
	</div>
</div>

<style>
	div[data-component='overlay'] {
		align-items: center;
		justify-content: center;
		margin: auto;
		border-radius: inherit;
		display: flex;
		left: 0;
		pointer-events: none;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: 2400;
	}

	div[data-component='overlay'] div:first-child {
		pointer-events: auto;
		background: var(--color-shadow);
		border-radius: inherit;
		bottom: 0;
		left: 0;
		opacity: 0.48;
		position: fixed;
		right: 0;
		top: 0;
	}

	div[data-component='overlay'] div:last-child {
		width: auto;
		outline: none;
		position: absolute;
		pointer-events: auto;
		contain: layout;
		/* max-height: calc(100% - 48px);
		width: calc(100% - 48px);
		max-width: calc(100% - 48px); */
		margin: 24px;
		display: flex;
		flex-direction: column;
		min-height: 0;
	}
</style>
