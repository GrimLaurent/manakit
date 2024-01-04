<script lang="ts">
	import { className, styleName } from '../../utils';

	// components
	import Card from '../Card/Card.svelte';
	import Overlay from '../Overlay/Overlay.svelte';

	// props
	export let open: boolean = false;
	export let closeOnOverlay: boolean = false;

	const handleForceClose = () => (open = false);

	$: idBase = $$props.id;
	$: classBase = className($$props.class);
	$: styleBase = styleName($$props.style);

	console.log('props', $$props);
</script>

{#if open}
	<div id={idBase} class={classBase} style={styleBase} data-component="dialog">
		<Overlay on:click={closeOnOverlay ? handleForceClose : null}>
			{#if $$slots.subheader}
				<slot name="subheader" />
			{/if}

			<Card {...$$props}>
				<slot />
			</Card>

			{#if $$slots.subfooter}
				<slot name="subfooter" />
			{/if}
		</Overlay>
	</div>
{/if}

<style>
	div[data-component='dialog'] {
		contain: layout;
		left: 0;
		pointer-events: none;
		position: absolute;
		top: 0;
		display: contents;
	}
</style>
