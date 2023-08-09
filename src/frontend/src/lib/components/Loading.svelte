<script lang="ts">
	import { fade } from 'svelte/transition';
	import { loading } from '$lib/stores/loading.store';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
</script>

{#if $loading}
	<div transition:fade class="w-full">
		<ProgressRadial class="" width="w-20" />
	</div>
{/if}

<style>
	div {
		position: absolute;
		width: full;
		top: 0;
		left: 0;
		bottom: 0;
		left: 0;
		display: grid;
		place-items: center;
		z-index: 9999;
		background-color: rgb(var(--color-tertiary-500) / 0.2);
		/* border-radius: var(--size);
		height: var(--size);
		width: var(--size);
		animation: moveLoader 1s infinite alternate; */
	}
	/* @keyframes moveLoader {
		from {
			transform: translate3d(100px, 0, 0);
		}
		from {
			transform: translate3d(-100px, 0, 0);
		}
	} */
</style>
