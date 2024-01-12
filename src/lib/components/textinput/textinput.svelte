<script lang="ts">
	import { classMap, styleMap } from '../../utils';

	console.log($$props.value);
</script>

<label
	class={classMap({
		component: 'text-input',
		default: $$props.class
	})}
>
	{#if $$slots.head}
		<div class="label">
			<slot name="head" />
		</div>
	{/if}

	<input
		id={$$props.id}
		class={classMap({
			component: 'input',
			'input-is-info': $$props.info,
			'input-is-success': $$props.success,
			'input-is-warning': $$props.warning,
			'input-is-error': $$props.error
		})}
		style={styleMap({
			default: $$props.style
		})}
		type={$$props.type || 'text'}
		placeholder={$$props.placeholder}
		{...$$props}
	/>

	{#if $$slots.footer}
		<div class="label">
			<slot name="footer" />
		</div>
	{/if}
</label>

<style>
	.text-input {
		display: flex;
		flex-direction: column;
	}

	input.input {
		flex-shrink: 1;
		appearance: none;
		height: 3rem;
		padding-left: 1rem;
		padding-right: 1rem;
		font-size: 1rem;
		line-height: 2;
		line-height: 1.5rem;
		border-radius: 0.5rem;
		border-width: 1px;
		border-color: transparent;
		background-color: var(--color-background);
	}

	.input:focus {
		box-shadow: none;
		border-color: var(--color-text);
		outline-style: solid;
		outline-width: 2px;
		outline-offset: 2px;
		outline-color: var(--color-text);
	}

	.label {
		display: flex;
		user-select: none;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 0.25rem;
	}

	.label :global(.label-text) {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text);
	}

	.label :global(.label-text-alt) {
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text);
	}

	.input-is-info,
	.input-is-success,
	.input-is-warning,
	.input-is-error {
		box-shadow: none;
		outline-style: solid;
		outline-width: 2px;
		outline-offset: 2px;
	}

	.input-is-info {
		outline-color: var(--color-info);
	}

	.input-is-success {
		outline-color: var(--color-success);
	}

	.input-is-warning {
		outline-color: var(--color-warning);
	}

	.input-is-error {
		outline-color: var(--color-error);
	}
</style>
