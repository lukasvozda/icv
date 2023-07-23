<script lang="ts">
	import { signOut } from '@junobuild/core';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
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
<button type="button" class="btn btn-lg variant-filled" on:click|stopPropagation={logOut}
	>Sign-out</button
>

<Toast />

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
