<script lang="ts">
	$: styleList = $$props.style;
</script>

<footer style={styleList}>
	<!-- slot: default -->
	<slot />
</footer>

<style>
	footer {
		align-items: center;
		display: flex;
		flex: 1 1 auto;
		padding: 8px 16px;
		position: relative;
		transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		transition-property: height, width, transform, max-width, left, right, top, bottom;
		border-style: solid;
		border-width: 0;
		border-radius: 0;
	}
</style>
