<script lang="ts">
	import { classMap, styleMap } from '../../utils';

	// state
	$: innerWidth = 0;
	$: innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
	id={$$props.id}
	class={classMap({
		component: 'toolbar',
		default: $$props.class,
		shadow: $$props.shadow || 'xl',
		rounded: $$props.rounded || 'sm'
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color,
		sizing: [$$props, [innerWidth, innerHeight]]
	})}
>
	<div
		class={classMap({
			component: 'toolbar-content'
		})}
	>
		<slot />
	</div>
</div>

<style>
	.toolbar {
		display: flex;
		align-items: center;
		padding: 0.5rem;
		min-height: 4rem;
		width: 100%;
	}

	.toolbar-content {
		align-items: center;
		display: flex;
		flex: 0 0 auto;
		position: relative;
		transition: inherit;
		width: 100%;
	}
</style>
