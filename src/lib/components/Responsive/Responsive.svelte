<script lang="ts">
	import { className } from '../../utils';
	export let inset: boolean = false;
	export let vertical: boolean = false;
	export let aspectRatio: string | number | undefined = undefined;
	export let contentClass: string | undefined = undefined;

	$: classList = [
		{ class: `is-inset`, value: inset },
		{ class: `is-vertical`, value: vertical }
	];

	function calAspectRatio(value: string | number) {
		let width, height;
		if (typeof value === 'string') {
			const values = value.split('/');
			width = parseFloat(values[0]);
			height = parseFloat(values[1]);
		} else if (typeof value === 'number') {
			const values = value.toString().split('/');
			width = parseFloat(values[0]);
			height = parseFloat(values[1]);
		} else {
			throw new Error('Bad format "x/y"');
		}

		if (isNaN(width) || isNaN(height) || height === 0) {
			throw new Error('Value for ratio is not valid');
		}
		const ratio = (height / width) * 100;
		return ratio.toFixed(2) + '%';
	}
</script>

<div class={className('dal-responsive', $$props.class, classList)} {...$$props.style}>
	{#if aspectRatio}
		<div class="dal-responsive--sizer" style={`padding-bottom: ${calAspectRatio(aspectRatio)}`} />
	{:else}
		<div class="dal-responsive--sizer" />
	{/if}

	<div class={className('dal-responsive--content', contentClass)}>
		<!-- slot: default -->
		<slot />
	</div>
</div>

<style>
	div.dal-responsive {
		display: flex;
		flex: 1 0 auto;
		max-height: 100%;
		max-width: 100%;
		overflow: hidden;
		position: relative;
	}

	div.dal-responsive--sizer {
		flex: 1 0 0px;
		transition: padding-bottom 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		pointer-events: none;
	}

	div.dal-responsive--sizer ~ .dal-responsive--content {
		margin-inline-start: -100%;
	}

	div.dal-responsive--content {
		flex: 1 0 0px;
		max-width: 100%;
	}
</style>
