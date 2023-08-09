<script lang="ts">
	import { signOut } from '@junobuild/core';
	import { toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	//import { userSignedInStore } from '$lib/stores/user.store';

	const logOut = async () => {
		let t: ToastSettings = {
			message: '',
			timeout: 10000,
			background: 'variant-filled-primary'
		};

		try {
			await signOut();
			t.message = 'Logged out';
			toastStore.trigger(t);
		} catch (err: unknown) {
			t.message = 'Log out failed: ' + err;
			t.background = 'variant-filled-error';
			toastStore.trigger(t);
			//console.log("error sign in", err)
		}

		//busy.stop();
	};
</script>

<!-- {#if $userSignedInStore}
	<p>
		<button type="button" class="text" on:click|stopPropagation={signOut}>Sign-out</button>
	</p>
{/if} -->
<button
	type="button"
	class="btn btn-lg variant-filled"
	title="Log out"
	on:click|stopPropagation={logOut}
	><svg
		class="mr-2 icon"
		fill="none"
		stroke="currentColor"
		stroke-width="1.5"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
		/>
	</svg> Log out</button
>

<!-- <Toast /> -->

<style lang="scss">
	button.text {
		margin: 0;
		gap: var(--padding);

		&:hover,
		&:focus {
			background: transparent;
			color: var(--color-tertiary);
		}
	}

	p {
		color: var(--value-color);
		margin-top: var(--padding-4x);
		text-align: center;
		color: black;
	}
</style>
