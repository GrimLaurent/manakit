<script lang="ts">
	import { className } from '../../utils';
</script>

<div class={className('dal-spacer', $$props.class)} {...$$props.style} />

<style>
	.dal-spacer {
		flex-grow: 1;
	}
</style>
