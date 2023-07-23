<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { authSubscribe, initJuno, type User } from '@junobuild/core';
	import { userStore, userSignedInStore } from '$lib/stores/user.store';
	import SignOut from '$lib/components/SignOut.svelte';
	import SignIn from '$lib/components/SignIn.svelte';

	let unsubscribe: (() => void) | undefined = undefined;

	onMount(async () => {
		unsubscribe = authSubscribe((user: User | null) => userStore.set(user));
		await initJuno({
			satelliteId: 'ooybk-nyaaa-aaaal-acoeq-cai'
		});
    console.log($userStore)
	});

	onDestroy(() => unsubscribe?.());
</script>

<main>
	<h1 class="h1">Admin</h1>
	{#if $userSignedInStore}
		<SignOut />
	{:else}
		<SignIn />
	{/if}
</main>
