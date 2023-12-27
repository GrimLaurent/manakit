<main class="dal-main">
	<!-- slot: default -->
	<slot />
</main>

<style>
	main.dal-main {
		display: block;
		flex: 1 0 auto;
		max-width: 100%;
		transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
