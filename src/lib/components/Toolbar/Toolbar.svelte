<script lang="ts">
	import { className, styleName } from '../../utils';
	import type { ToolbarDensity, ToolbarElevated, ToolbarRounded } from './types';

	// props
	export let density: ToolbarDensity = 'default';
	export let rounded: ToolbarRounded | undefined = undefined;
	export let floating: boolean = false;
	export let absolute: boolean = false;
	export let fixed: boolean = false;
	export let color: string | undefined = undefined;
	export let background: string | undefined = undefined;
	export let elevation: ToolbarElevated | undefined = undefined;
	export let bordered: boolean = false;
	export let height: number | string | undefined = undefined;
	export let theme: 'dark' | 'light' | undefined = undefined;

	$: classList = [
		{ class: `toolbar`, value: true },
		{ class: `density-${density}`, value: density },
		{ class: `is-float`, value: floating },
		{ class: `is-absolute`, value: absolute },
		{ class: `is-fixed`, value: fixed },
		{ class: `is-bordered`, value: bordered },
		{ class: `rounded`, value: typeof rounded === 'boolean' && rounded },
		{ class: `rounded-${rounded}`, value: typeof rounded !== 'boolean' && rounded },
		{ class: `elevation-8`, value: typeof elevation === 'boolean' && elevation },
		{ class: `elevation-${elevation}`, value: typeof elevation !== 'boolean' && elevation },
		{ class: `${theme}`, value: theme }
	];

	$: styleList = [
		{ property: `background`, value: background },
		{ property: `color`, value: color },
		{ property: `height`, value: height }
	];

	$: styleContentList = [{ property: `height`, value: height }];

	$: idHtml = $$props.id;
	$: classHtml = className(undefined, $$props.class, classList);
	$: styleHtml = styleName($$props.style, styleList);
	$: styleContentHtml = styleName(undefined, styleContentList);
</script>

<header id={idHtml} class={classHtml} style={styleHtml}>
	<div class="toolbar-content" style={styleContentHtml}>
		<!-- slot: default -->
		<slot />
	</div>
</header>

<style>
	.toolbar {
		align-items: flex-start;
		display: flex;
		flex: none;
		flex-direction: column;
		justify-content: space-between;
		max-width: 100%;
		overflow: hidden;
		position: relative;
		width: 100%;
		background: var(--dal-theme-background);
		color: var(--dal-theme-text);
	}

	.toolbar-content {
		align-items: center;
		display: flex;
		flex: 0 0 auto;
		position: relative;
		transition: inherit;
		width: 100%;
	}

	.toolbar.density-default .toolbar-content {
		height: 64px;
	}
	.toolbar.density-comfortable .toolbar-content {
		height: 56px;
	}
	.toolbar.density-compact .toolbar-content {
		height: 48px;
	}

	.toolbar.is-float {
		display: inline-flex;
	}

	.toolbar.is-absolute {
		position: absolute;
	}

	.toolbar.is-fixed {
		position: fixed;
	}

	.toolbar.is-bordered {
		border-width: thin;
		border-style: solid;
	}
</style>
