<script lang="ts">
	import { signIn } from '@junobuild/core';
	import { toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	//import { toasts } from '../stores/toasts.store';
	import { loading } from '$lib/stores/loading.store';
	const login = async () => {
		$loading = true;
		let t: ToastSettings = {
			message: '',
			timeout: 10000,
			background: 'variant-filled-primary'
		};

		try {
			await signIn();
			t.message = 'Log in successfull';
			toastStore.trigger(t);
		} catch (err: unknown) {
			t.message = 'Log in failed: ' + err;
			t.background = 'variant-filled-error';
			toastStore.trigger(t);
			//console.log("error sign in", err)
		}
		$loading = false;
	};
</script>

<!-- <button type="button" on:click|stopPropagation={login} disabled={$busy}>Sign-in</button> -->
<button class="btn btn-lg variant-filled" type="button" on:click|stopPropagation={login}
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
			d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
		/>
	</svg>
	Log in</button
>
