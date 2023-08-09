<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { authSubscribe, getDoc, initJuno, type User } from '@junobuild/core';
	import { setDoc } from '@junobuild/core';
	import { userStore, userSignedInStore } from '$lib/stores/user.store';
	import SignOut from '$lib/components/SignOut.svelte';
	import SignIn from '$lib/components/SignIn.svelte';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	let unsubscribe: (() => void) | undefined = undefined;

	onMount(async () => {
		unsubscribe = authSubscribe((user: User | null) => userStore.set(user));
		await initJuno({
			satelliteId: 'ooybk-nyaaa-aaaal-acoeq-cai'
		});
		//	console.log($userStore);

		// 	await setDoc({
		// 		collection: 'test_private',
		// 		doc: {
		// 			key: $userStore.key,
		// 			data: {
		// 				name: 'lukas',
		// 				id: 'adfadsfadsf'
		// 			},
		// 			description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
		// 		}
		// 	});
		// 	console.log('sent');
	});

	onDestroy(() => unsubscribe?.());
</script>

<main>
	<h1 class="h1">Admin panel</h1>
	<SignOut />
</main>
