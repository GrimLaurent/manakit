<script lang="ts">
	import { className } from '../../utils';

	export let fluid: boolean = false;
	export let fillHeight: boolean = false;

	$: classList = [
		{ class: `is-fluid`, value: fluid },
		{ class: `fill-height`, value: fillHeight }
	];
</script>

<section class={className('dal-container', $$props.class, classList)} {...$$props.style}>
	<!-- slot: default -->
	<slot />
</section>

<style>
	.dal-container {
		width: 100%;
		padding: 16px;
		margin-right: auto;
		margin-left: auto;
	}

	.dal-container.is-fluid {
		max-width: 100%;
	}

	.dal-container.fill-height {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
	}

	@media screen and (min-width: 960px) {
		.dal-container:not(.is-fluid) {
			max-width: 900px;
		}
	}

	@media screen and (min-width: 1280px) {
		.dal-container:not(.is-fluid) {
			max-width: 1200px;
		}
	}
</style>
