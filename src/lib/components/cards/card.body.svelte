<script lang="ts">
	import { classMap, styleMap } from '../../utils';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'card-body',
		default: $$props.class
	})}
	style={styleMap({ default: $$props.style })}
>
	<!-- slot: default -->
	<slot />
</div>

<style>
	.card-body {
		display: flex;
		flex: 1 1 auto;
		flex-direction: column;
		padding: var(--padding-card, 2rem);
		gap: 0.5rem;
	}
</style>
