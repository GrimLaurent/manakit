<script lang="ts">
	import { classMap, styleMap } from '../../utils';
</script>

<h2
	id={$$props.id}
	class={classMap({
		component: 'card-title',
		default: $$props.class
	})}
	style={styleMap({ default: $$props.style })}
>
	<!-- slot: default -->
	<slot />
</h2>

<style>
	.card-title {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
</style>
