<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { userSignedInStore, userStore } from '$lib/stores/user.store';
	import SignOut from '$lib/components/SignOut.svelte';
	import SignIn from '$lib/components/SignIn.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { authSubscribe, initJuno, type User } from '@junobuild/core';
	import { loading } from '$lib/stores/loading.store';
	let value: string = 'admin';

	const changePath = function (path: string) {
		goto(path);
	};

	let unsubscribe: (() => void) | undefined = undefined;

	onMount(async () => {
		$loading = true;
		unsubscribe = authSubscribe((user: User | null) => userStore.set(user));
		await initJuno({
			satelliteId: 'ooybk-nyaaa-aaaal-acoeq-cai'
		});
		$loading = false;
	});
	onDestroy(() => unsubscribe?.());
</script>

{#if $userSignedInStore}
	<div class="flex flex-col items-center">
		<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
			<RadioItem
				href="/admin"
				on:click={() => changePath('/admin')}
				bind:group={value}
				name="justify"
				value={'admin'}
			>
				<!-- <a href="/admin">General</a> -->General
			</RadioItem>
			<RadioItem
				on:click={() => changePath('/admin/blog')}
				bind:group={value}
				name="justify"
				value={'/admin/blog'}
			>
				<!-- <a href="/admin/blog">Blog</a> -->Blog
			</RadioItem>
			<RadioItem
				on:click={() => changePath('/admin/resume')}
				bind:group={value}
				name="justify"
				value={'/admin/resume'}
			>
				<!-- <a href="/admin/resume">Resume</a> -->Resume
			</RadioItem>
			<RadioItem
				on:click={() => changePath('/admin/nostr')}
				bind:group={value}
				name="justify"
				value={'/admin/nostr'}
			>
				<!-- <a href="/admin/nostr">Nostr</a> -->Nostr
			</RadioItem>
		</RadioGroup>
	</div>
	<slot />
{:else}
	<div class="flex flex-col items-center">
		<h3 class="h3 text-center my-8">Welcome to the admin panel. Please log in to enter.</h3>
		<SignIn />
	</div>
{/if}
