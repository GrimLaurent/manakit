<script lang="ts">
	$: idBase = $$props.id;
	$: classBase = $$props.class;
	$: styleBase = $$props.style;
</script>

<div id={idBase} class={classBase} style={styleBase} data-app="manakit">
	<!-- slot: default -->
	<slot />
</div>

<style>
	div {
		display: flex;
	}
</style>
