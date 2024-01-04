<script lang="ts">
	import { className, styleName } from '../../utils';
	import type { BtnSize, BtnDensity, BtnRounded, BntTarget, BtnElevated } from './Btn.types';

	// props
	export let href: string | undefined = undefined;
	export let target: BntTarget = undefined;
	export let type: 'button' | 'reset' | 'submit' = 'button';
	export let role: 'button' | undefined = undefined;
	export let size: BtnSize = 'md';
	export let density: BtnDensity = 'default';
	export let block: boolean = false;
	export let rounded: BtnRounded = true;
	export let bordered: boolean = false;
	export let text: boolean = false;
	export let icon: boolean = false;
	export let disabled: boolean = false;
	export let loading: boolean = false;
	export let active: boolean = false;
	export let color: string | undefined = undefined;
	export let background: string | undefined = undefined;
	export let elevation: BtnElevated | undefined = undefined;
	export let shadow: string | boolean | undefined = undefined;

	$: isDisabled = loading ? loading : disabled;
	$: isHover = false;

	$: classList = [
		{ class: `btn`, value: true },
		{ class: `is-bordered`, value: bordered },
		{ class: `is-text`, value: text },
		{ class: `is-block`, value: block },
		{ class: `is-icon`, value: icon },
		{ class: `is-disabled`, value: isDisabled },
		{ class: `is-loading`, value: loading },
		{ class: `is-active`, value: active },
		{ class: `size-${size}`, value: size },
		{ class: `is-hover`, value: isHover },
		{ class: `density-${density}`, value: density },
		{ class: `rounded`, value: typeof rounded === 'boolean' && rounded },
		{ class: `rounded-${rounded}`, value: typeof rounded !== 'boolean' && rounded },
		{ class: `elevation-${elevation}`, value: elevation },
		{ class: `shadow`, value: typeof shadow === 'boolean' && shadow },
		{ class: `shadow-${shadow}`, value: typeof shadow !== 'boolean' && shadow }
	];

	$: classHoverList = [
		{ class: `btn-hover`, value: true },
		{ class: `rounded`, value: typeof rounded === 'boolean' && rounded },
		{ class: `rounded-${rounded}`, value: typeof rounded !== 'boolean' && rounded }
	];

	$: classActiveList = [
		{ class: `btn-active`, value: true },
		{ class: `rounded`, value: typeof rounded === 'boolean' && rounded },
		{ class: `rounded-${rounded}`, value: typeof rounded !== 'boolean' && rounded }
	];

	$: styleList = [
		{ property: `color`, value: color },
		{ property: `background`, value: background }
	];

	function handleHover(params: boolean) {
		isHover = params;
	}

	$: idHtml = $$props.id;
	$: classHtml = className($$props.class, classList);
	$: classHoverHtml = className(undefined, classHoverList);
	$: classActiveHtml = className(undefined, classActiveList);
	$: styleHtml = styleName($$props.style, styleList);
</script>

{#if href}
	<a
		id={idHtml}
		class={classHtml}
		style={styleHtml}
		{href}
		{target}
		on:mouseenter={() => handleHover(true)}
		on:mouseleave={() => handleHover(false)}
	>
		{#if isHover && !isDisabled && !loading}
			<span class={classHoverHtml} />
		{/if}
		{#if active && !isDisabled && !loading}
			<span class={classActiveHtml} />
		{/if}
		<!-- slot: loading -->
		{#if loading}
			<span class="btn-loading">
				<slot name="loading">Loading</slot>
			</span>
		{/if}
		<!-- slot: prepend -->
		{#if $$slots.prepend}
			<span class="btn-prepend">
				<slot name="prepend" />
			</span>
		{/if}
		<!-- slot: default -->
		<span class="btn-content">
			<slot />
		</span>
		<!-- slot: append -->
		{#if $$slots.append}
			<span class="btn-append">
				<slot name="append" />
			</span>
		{/if}
	</a>
{:else}
	<button
		id={idHtml}
		class={classHtml}
		style={styleHtml}
		disabled={isDisabled}
		{type}
		{role}
		on:click
		on:mouseenter={() => handleHover(true)}
		on:mouseleave={() => handleHover(false)}
	>
		{#if isHover && !isDisabled && !loading}
			<span class={classHoverHtml} />
		{/if}
		{#if active && !isDisabled && !loading}
			<span class={classActiveHtml} />
		{/if}
		<!-- slot: loading -->
		{#if loading}
			<span class="btn-loading">
				<slot name="loading">Loading</slot>
			</span>
		{/if}
		<!-- slot: prepend -->
		{#if $$slots.prepend}
			<span class="btn-prepend">
				<slot name="prepend" />
			</span>
		{/if}
		<!-- slot: default -->
		<span class="btn-content">
			<slot />
		</span>
		<!-- slot: append -->
		{#if $$slots.append}
			<span class="btn-append">
				<slot name="append" />
			</span>
		{/if}
	</button>
{/if}

<style>
	.btn {
		--btn-background: var(--color-background);
		--btn-color: var(--color-text);
		align-items: center;
		display: inline-grid;
		grid-template-areas: 'prepend content append';
		grid-template-columns: max-content auto max-content;
		font-weight: 500;
		justify-content: center;
		line-height: normal;
		max-width: 100%;
		outline: none;
		position: relative;
		text-decoration: none;
		transition-property: box-shadow, transform, opacity, background;
		transition-duration: 0.28s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		user-select: none;
		vertical-align: middle;
		flex-shrink: 0;

		background: var(--btn-background);
		color: var(--btn-color);
	}

	.btn .btn-content,
	.btn .btn-prepend,
	.btn .btn-append {
		align-items: center;
		display: flex;
		transition:
			transform,
			opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.btn .btn-content {
		grid-area: content;
		justify-content: center;
		white-space: nowrap;
	}

	.btn .btn-append,
	.btn .btn-prepend {
		font-size: var(--dal-btn-size-icon);
	}

	.btn .btn-prepend {
		grid-area: prepend;
		margin-inline: calc(var(--dal-btn-height) / -9) calc(var(--dal-btn-height) / 4.5);
	}

	.btn .btn-append {
		grid-area: append;
		margin-inline: calc(var(--dal-btn-height) / 4.5) calc(var(--dal-btn-height) / -9);
	}
	.btn.is-disabled:not(.is-loading) {
		pointer-events: none;
		user-select: none;
		opacity: 0.6;
	}

	.btn.is-disabled.is-loading {
		pointer-events: none;
		user-select: none;
	}

	.btn.is-loading .btn-prepend,
	.btn.is-loading .btn-append,
	.btn.is-loading .btn-content {
		opacity: 0;
		pointer-events: none;
		user-select: none;
	}

	.btn .btn-loading {
		display: flex;
		position: absolute;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		pointer-events: none;
		user-select: none;
	}

	.btn .btn-hover,
	.btn .btn-active {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		background: currentColor;
	}

	.btn .btn-hover {
		opacity: 0.08;
	}

	.btn .btn-active {
		opacity: 0.14;
	}

	button,
	[type='button'],
	[type='reset'],
	[type='submit'],
	[role='button'] {
		cursor: pointer;
		color: inherit;
	}

	a {
		text-decoration: none;
	}
	/* variant */
	.btn:not(.is-bordered):not(.is-text) {
		border: thin solid transparent !important;
	}
	.btn.is-bordered {
		background: transparent !important;
		border: thin solid currentColor !important;
	}
	.btn.is-text {
		background: transparent !important;
		border: thin solid transparent !important;
	}
	/* icon */
	.btn.is-icon {
		border-radius: 50% !important;
		min-width: 0 !important;
		padding: 0 !important;
	}
	/* block */
	.btn.is-block {
		display: flex;
		flex: 1 0 auto;
		min-width: 100%;
	}
	/* density */
	.btn.density-compact:not(.is-icon) {
		height: calc(var(--dal-btn-height) + -12px) !important;
	}
	.btn.density-comfortable:not(.is-icon) {
		height: calc(var(--dal-btn-height) + -8px) !important;
	}
	.btn.density-default:not(.is-icon) {
		height: calc(var(--dal-btn-height) + 0px) !important;
	}

	.btn.density-compact.is-icon {
		width: calc(var(--dal-btn-height) + -8px) !important;
		height: calc(var(--dal-btn-height) + -8px) !important;
	}
	.btn.density-comfortable.is-icon {
		width: calc(var(--dal-btn-height) + 0px) !important;
		height: calc(var(--dal-btn-height) + 0px) !important;
	}
	.btn.density-default.is-icon {
		width: calc(var(--dal-btn-height) + 12px) !important;
		height: calc(var(--dal-btn-height) + 12px) !important;
	}

	/* sizing */
	.btn.size-xs:not(.is-icon) {
		--dal-btn-size: 0.625rem;
		--dal-btn-size-icon: 1rem;
		--dal-btn-height: 20px;
		font-size: var(--dal-btn-size);
		min-width: 36px;
		height: var(--dal-btn-height);
		padding: 0 8px;
	}
	.btn.size-sm:not(.is-icon) {
		--dal-btn-size: 0.75rem;
		--dal-btn-size-icon: 1rem;
		--dal-btn-height: 28px;
		font-size: var(--dal-btn-size);
		min-width: 50px;
		height: var(--dal-btn-height);
		padding: 0 12px;
	}
	.btn.size-md:not(.is-icon) {
		--dal-btn-size: 0.875rem;
		--dal-btn-size-icon: 1.125rem;
		--dal-btn-height: 36px;
		font-size: var(--dal-btn-size);
		min-width: 64px;
		height: var(--dal-btn-height);
		padding: 0 16px;
	}
	.btn.size-lg:not(.is-icon) {
		--dal-btn-size: 1rem;
		--dal-btn-size-icon: 1.25rem;
		--dal-btn-height: 44px;
		font-size: var(--dal-btn-size);
		min-width: 78px;
		height: var(--dal-btn-height);
		padding: 0 20px;
	}
	.btn.size-xl:not(.is-icon) {
		--dal-btn-size: 1.125rem;
		--dal-btn-size-icon: 1.375rem;
		--dal-btn-height: 52px;
		font-size: var(--dal-btn-size);
		min-width: 92px;
		height: var(--dal-btn-height);
		padding: 0 24px;
	}

	.btn.size-xs.is-icon {
		--dal-btn-size: 1rem;
		--dal-btn-height: 20px;
		font-size: var(--dal-btn-size);
		min-width: 36px;
		height: var(--dal-btn-height);
	}
	.btn.size-sm.is-icon {
		--dal-btn-size: 1rem;
		--dal-btn-height: 28px;
		font-size: var(--dal-btn-size);
		min-width: 50px;
		height: var(--dal-btn-height);
	}
	.btn.size-md.is-icon {
		--dal-btn-size: 1.5rem;
		--dal-btn-height: 36px;
		font-size: var(--dal-btn-size);
		min-width: 64px;
		height: var(--dal-btn-height);
	}
	.btn.size-lg.is-icon {
		--dal-btn-size: 1.5rem;
		--dal-btn-height: 44px;
		font-size: var(--dal-btn-size);
		min-width: 78px;
		height: var(--dal-btn-height);
	}
	.btn.size-xl.is-icon {
		--dal-btn-size: 1.75rem;
		--dal-btn-height: 52px;
		font-size: var(--dal-btn-size);
		min-width: 92px;
		height: var(--dal-btn-height);
	}
</style>
