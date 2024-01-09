<script lang="ts">
	import { classMap, styleMap } from '../../utils';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'alert',
		default: $$props.class,
		'alert-is-block': $$props.block,
		'alert-is-info': $$props.info,
		'alert-is-success': $$props.success,
		'alert-is-warning': $$props.warning,
		'alert-is-error': $$props.error
	})}
	style={styleMap({
		default: $$props.style,
		background: $$props.background,
		color: $$props.color
	})}
	role={$$props.role || 'alert'}
>
	<slot />
</div>

<style>
	.alert {
		display: grid;
		width: 100%;
		grid-auto-flow: row;
		align-content: flex-start;
		align-items: center;
		justify-items: center;
		gap: 1rem;
		text-align: center;
		border-radius: 0.75rem;
		border-width: 1px;
		padding: 1rem;
		color: var(--color-text-on-surface);
		background-color: var(--color-surface);
	}

	.alert:not(.alert-is-block) {
		grid-auto-flow: column;
		grid-template-columns: auto minmax(auto, 1fr);
		justify-items: start;
		text-align: start;
	}

	.alert-is-info {
		background-color: var(--color-info);
		color: var(--color-text);
	}

	.alert-is-success {
		background-color: var(--color-success);
		color: var(--color-text);
	}

	.alert-is-warning {
		background-color: var(--color-warning);
		color: var(--color-text);
	}

	.alert-is-error {
		background-color: var(--color-error);
		color: var(--color-text);
	}
</style>
