<script lang="ts">
	import Component from './modal.module.svelte';

	export let open: boolean = false;
</script>

<Component {...$$props} {open} on:click>
	<slot />
</Component>

<style>
	:global(.modal[open]) {
		pointer-events: auto;
		visibility: visible;
		opacity: 1;
		background: #0006;
		animation: modal-pop 0.2s ease-out;
	}

	:global(:where(.modal)) {
		align-items: center;
	}

	:global(:where(.modal.modal-is-bottom)) {
		align-items: end;
	}

	:global(:where(.modal.modal-is-top)) {
		align-items: start;
	}

	@keyframes modal-pop {
		0% {
			opacity: 0;
		}
	}
</style>
