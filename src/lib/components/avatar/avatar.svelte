<script lang="ts">
	import { classMap, styleMap } from '../../utils';

	function setPlaceholder(name: string): string {
		const section = name.split(' ');
		let result = '';
		if (section.length === 1) {
			result = section[0][0].toUpperCase();
		} else if (section.length > 0) {
			const firstname = section[0][0].toUpperCase();
			const lastname = section[section.length - 1];
			result = firstname + lastname[0].toUpperCase();
		}
		return result;
	}

	let placeholder = '';

	$: {
		console.log('props', $$props.name);
		if ($$props.name) {
			placeholder = setPlaceholder($$props.name);
		}
	}
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'avatar',
		'avatar-is-placeholder': $$props.name !== undefined
	})}
>
	<div
		class={classMap({
			default: $$props.class,
			rounded: $$props.rounded
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color
		})}
	>
		{#if $$slots.default}
			<slot />
		{:else}
			<span>{placeholder}</span>
		{/if}
	</div>
</div>

<style>
	.avatar {
		position: relative;
		display: inline-flex;
	}

	.avatar > div {
		display: block;
		aspect-ratio: 1/1;
		overflow: hidden;
		background: var(--color-primary);
		border-radius: 0.25rem;
	}

	.avatar-is-placeholder > div {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	:global(img) {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
</style>
