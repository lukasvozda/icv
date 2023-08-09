<script lang="ts">
	import { loading } from '$lib/stores/loading.store';
	import { userStore } from '$lib/stores/user.store';
	import { getDoc, initJuno, setDoc } from '@junobuild/core';
	import type { Doc } from '@junobuild/core/dist/declarations/satellite/satellite.did';
	import { onMount } from 'svelte';

	let pubKey: string = '';

	type Data = {
		key: string;
	};

	type Doc = {
		key: string;
		description: string;
		owner: string;
		data: Data;
		updated_at: number;
	};

	let myDoc: Doc<Data> | undefined;

	onMount(async () => {
		$loading = true;
		await initJuno({
			satelliteId: 'ooybk-nyaaa-aaaal-acoeq-cai'
		});

		myDoc = await getDoc({
			collection: 'pubKeys',
			key: $userStore.key
		});
		pubKey = myDoc?.data.key;
		console.log(myDoc);
		console.log(myDoc?.updated_at);
		console.log(myDoc?.data.key);
		$loading = false;
	});

	const submit = async () => {
		$loading = true;
		console.log(myDoc?.updated_at);
		myDoc = await setDoc({
			collection: 'pubKeys',
			doc: {
				updated_at: myDoc?.updated_at,
				key: $userStore.key,
				data: {
					key: pubKey
				},
				description: 'Nostr public key.'
			}
		});
		console.log('sent');
		$loading = false;
	};
</script>

<h1 class="h1">Nostr admin</h1>

<label class="label w-1/3">
	<span>Label</span>
	<input class="input" title="Input (month)" bind:value={pubKey} type="month" />
</label>
<button class="mt-2 inline-flex btn btn-lg variant-filled" on:click={submit}>Submit</button>
