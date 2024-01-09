<script lang="ts">
	import { classMap, styleMap } from '../../utils';
</script>

<div
	id={$$props.id}
	class={classMap({
		component: 'spacer',
		default: $$props.class
	})}
	style={styleMap({
		default: $$props.style
	})}
/>

<style>
	.spacer {
		flex-grow: 1;
	}
</style>
