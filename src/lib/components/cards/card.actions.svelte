<script lang="ts">
	import { classMap, styleMap } from '../../utils';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'card-actions',
		default: $$props.class
	})}
	style={styleMap({ default: $$props.style })}
>
	<!-- slot: default -->
	<slot />
</div>

<style>
	.card-actions {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: 0.5rem;
	}
</style>
