<script lang="ts">
	import Component from './card.module.svelte';
</script>

{#if $$props.disabled}
	<Component {...$$props}>
		<slot />
	</Component>
{:else if $$props.href}
	<a href={$$props.href} target={$$props.target}>
		<Component {...$$props}>
			<slot />
		</Component>
	</a>
{:else}
	<Component {...$$props} on:click>
		<slot />
	</Component>
{/if}

<style>
	a,
	a:hover,
	a:visited,
	a:focus,
	a:active {
		text-decoration: none;
		color: inherit;
		outline: 0;
	}

	a:focus {
		outline: 4px solid rgba(0, 125, 250, 0.6);
	}

	:global(figure) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
