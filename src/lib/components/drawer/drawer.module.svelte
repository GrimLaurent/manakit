<script lang="ts">
	import { classMap, styleMap } from '../../utils';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'drawer',
		default: $$props.class
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
>
	<slot />
</div>

<style>
	.drawer {
		position: relative;
		display: grid;
		grid-auto-columns: max-content auto;
		width: 100%;
		overflow: hidden;
	}
</style>
