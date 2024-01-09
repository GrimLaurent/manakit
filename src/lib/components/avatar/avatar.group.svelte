<script lang="ts">
	import { classMap, styleMap } from '../../utils';
	import Avatar from './avatar.svelte';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'avatar-group',
		'avatar-display': $$props.avatar
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
>
	<slot />

	{#if $$props.count && $$props.count > 0}
		<Avatar value={`+` + $$props.count} />
	{/if}
</div>

<style>
	.avatar-group {
		display: flex;
		overflow: hidden;
	}

	.avatar-group :global(:where(.avatar > div)) {
		overflow: hidden;
		border-width: 4px;
		border-color: var(--color-background);
		border-style: solid;
	}

	.avatar-group :global(.avatar) {
		margin-right: calc(-1.5rem * 0);
		margin-left: calc(-1.5rem * calc(1 - 0));
	}
</style>
