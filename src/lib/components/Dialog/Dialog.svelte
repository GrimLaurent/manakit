<script lang="ts">
	import { className, styleName } from '../../utils';

	// props
	export let open: boolean = false;
	export let color: string | undefined = undefined;
	export let background: string | undefined = undefined;
	export let mandatory: boolean | undefined = undefined;

	$: classList = [{ class: `dialog`, value: true }];

	$: styleList = [
		{ property: `background`, value: background },
		{ property: `color`, value: color }
	];

	function handleForceClose() {
		if (!mandatory) {
			open = false;
		}
	}

	$: idHtml = $$props.id;
	$: classHtml = className(undefined, $$props.class, classList);
	$: styleHtml = styleName($$props.style, styleList);
</script>

{#if open}
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-scrim" on:click={handleForceClose}></div>
			<div class="overlay-content">
				<!-- <div id={idHtml} class={classHtml} style={styleHtml}>
					<div> -->
				<!-- slot: default -->
				<!-- <slot />
					</div>
				</div> -->

				<slot />
			</div>
		</div>
	</div>
{/if}

<style>
	.dialog {
		display: flex;
		/* background: var(--dal-theme-background);
		color: var(--dal-theme-text); */
	}

	.overlay-container {
		contain: layout;
		left: 0;
		pointer-events: none;
		position: absolute;
		top: 0;
		display: contents;
	}

	.overlay {
		align-items: center;
		justify-content: center;
		margin: auto;
		border-radius: inherit;
		display: flex;
		left: 0;
		pointer-events: none;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: 2400;
	}

	.overlay-scrim {
		pointer-events: auto;
		background: var(--color-text);
		border-radius: inherit;
		bottom: 0;
		left: 0;
		opacity: 0.32;
		position: fixed;
		right: 0;
		top: 0;
	}

	.overlay-content {
		width: auto;
		outline: none;
		position: absolute;
		pointer-events: auto;
		contain: layout;
		max-height: calc(100% - 48px);
		width: calc(100% - 48px);
		max-width: calc(100% - 48px);
		margin: 24px;
		display: flex;
		flex-direction: column;
		min-height: 0;
	}
</style>
