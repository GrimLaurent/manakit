<script lang="ts">
	import { classMap, styleMap } from '../../utils';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'divider',
		default: $$props.class,
		'divider-is-horizontal': $$props.horizontal,
		'divider-is-start': $$props.start,
		'divider-is-end': $$props.end
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
	.divider {
		display: flex;
		flex-direction: row;
		align-items: center;
		align-self: stretch;
		margin-top: 1rem;
		margin-bottom: 1rem;
		height: 1rem;
		white-space: nowrap;
	}

	.divider:not(:empty) {
		gap: 1rem;
	}

	.divider:not(.divider-is-start):before,
	.divider:not(.divider-is-end):after {
		height: 0.125rem;
		width: 100%;
		flex-grow: 1;
		content: '';
		background-color: var(--color-divider);
	}

	.divider-is-horizontal {
		margin-left: 1rem;
		margin-right: 1rem;
		margin-top: 0;
		margin-bottom: 0;
		height: auto;
		width: 1rem;
		flex-direction: column;
	}

	.divider-is-horizontal:not(.divider-is-start):before,
	.divider-is-horizontal:not(.divider-is-end):after {
		height: 100%;
		width: 0.125rem;
	}
</style>
