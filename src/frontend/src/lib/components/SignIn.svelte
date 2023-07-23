<script lang="ts">
	import { signIn } from '@junobuild/core';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	//import { toasts } from '../stores/toasts.store';
	//import { busy } from '../stores/busy.store';

	const login = async () => {
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

		//busy.stop();
	};
</script>

<!-- <button type="button" on:click|stopPropagation={login} disabled={$busy}>Sign-in</button> -->
<button class="btn btn-lg variant-filled" type="button" on:click|stopPropagation={login}
	>Sign-in</button
>

<Toast />
