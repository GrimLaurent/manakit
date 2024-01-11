<script lang="ts">
	import { classMap, styleMap } from '../../utils';
</script>

<li
	id={$$props.id}
	class={classMap({
		component: 'menu-title',
		default: $$props.class
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
>
	<slot />
</li>

<style>
	.menu-title {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 700;
		color: var(--color-text);
		opacity: 0.6;
	}
</style>
