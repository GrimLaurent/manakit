<script lang="ts">
	import { classMap, styleMap } from '../../utils';

	function setPlaceholder(value: string, short: boolean): string {
		if (short) {
			const section = value.split(' ');
			let result = '';
			if (section.length === 1) {
				result = section[0][0].toUpperCase();
			} else if (section.length > 0) {
				const firstname = section[0][0].toUpperCase();
				const lastname = section[section.length - 1];
				result = firstname + lastname[0].toUpperCase();
			}
			return result;
		} else {
			return value;
		}
	}

	console.log('$$slot', $$slots);
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'avatar',
		'avatar-is-placeholder': $$props.value !== undefined
	})}
>
	<div
		class={classMap({
			default: $$props.class,
			rounded: $$props.rounded,
			size: $$props.size || 'md'
		})}
		style={styleMap({
			default: $$props.style,
			background: $$props.background,
			color: $$props.color,
			width: $$props.width,
			height: $$props.height
		})}
	>
		{#if $$slots.default}
			<slot />
		{:else}
			<span>{setPlaceholder($$props.value, $$props.short)}</span>
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
		background: var(--color-surface);
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

	.size-sm {
		width: 2rem;
	}

	.size-md {
		width: 3rem;
	}

	.size-lg {
		width: 4rem;
	}

	.size-xl {
		width: 6rem;
	}
</style>
