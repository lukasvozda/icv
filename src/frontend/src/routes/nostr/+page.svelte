<script lang="ts">
	import NDK, { type NDKUserProfile } from '@nostr-dev-kit/ndk';
	import { onMount } from 'svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	//import { nip19 } from 'nostr-tools';
	//import type { ProfilePointer } from 'nostr-tools/lib/nip19';
	//import { Int } from '@dfinity/candid/lib/cjs/idl';

	let feedEvents = [''];

	let ndk = new NDK({
		explicitRelayUrls: [
			'wss://relay.plebstr.com',
			'wss://relay.plebstr.com/',
			'wss://relay.nostr.band',
			'wss://relay.damus.io',
			'wss://relayable.org/'
		]
	});

	ndk.connect();

	let userProfile: NDKUserProfile;

	const npub = 'npub17evr39q66axplule7k8xshh5agyq0zs0eeeje9pl07ne7y0rl4hsmwkl4a';

	const user = ndk.getUser({ npub: npub });

	const eventsPromise = ndk.fetchEvents({
		kinds: [1],
		authors: ['f65838941ad74c1ff3f9f58e685ef4ea08078a0fce732c943f7fa79f11e3fd6f']
	});
	//const eventsPromise = async () => {
	//console.log(user.profile);
	//console.log(user.profile);
	//let follows = await user.follows()
	//console.log(follows);

	// Get data of people that I floow
	// let npubs : string[] = [];

	// follows.forEach(element => {
	//   console.log(nip19.decode(element.npub));
	//   npubs.push(String(nip19.decode(element.npub).data))
	// });

	//
	// for (const follow of follows) {
	//   await follow.fetchProfile();
	//   console.log(follow.profile?.name || follow.npub);

	//   console.log(follow.npub);

	// }
	//const filter = { kinds: [1], authors: ["f65838941ad74c1ff3f9f58e685ef4ea08078a0fce732c943f7fa79f11e3fd6f",] };
	//const fetchedEvent = await ndk.fetchEvents(filter);
	// for(var e of fetchedEvent){
	//   feedEvents.push(e.content)
	// }
	// return feedEvents;

	//};

	//onMount(connectRelay2);
</script>

<h1 class="h1">Nostric</h1>
<p class="my-8">
	Nostric is a Nostr web client running on the Internet Computer. Right now only reading my own
	personal posts.
</p>
{#await user.fetchProfile()}
	<section class="card w-2/3">
		<div class="card-header flex justify-between items-center">
			<div class="flex justify-center items-center space-x-4" class:animate-pulse={true}>
				<div class="placeholder-circle w-16" />
				<div class="placeholder-circle w-14" />
				<div class="placeholder-circle w-10" />
			</div>
		</div>
		<div class="p-4 space-y-4" class:animate-pulse={true}>
			<div class="placeholder" />
			<div class="grid grid-cols-4 gap-4">
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
			</div>
			<div class="placeholder" />
			<div class="placeholder" />
		</div>
	</section>
{:then events}
	<section class="card p-4 my-4 w-2/3">
		<Avatar
			src={user.profile?.image}
			class="mr-4 my-4 "
			initials="LV"
			width="w-24"
			background="bg-primary-500"
		/>
		<h2 class="h2 mt-4">{user.profile?.displayName}</h2>
		<span>@{user.profile?.name}</span>
		<p class="mt-4">{user.profile?.about}</p>
		<p>Lightning Network address: {user.profile?.lud16}</p>
	</section>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

{#await eventsPromise}
	{#each { length: 4 } as _, i}
		<section class="card w-2/3 my-4">
			<div class="p-4 space-y-4" class:animate-pulse={true}>
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
		</section>
	{/each}
{:then events}
	{#each Array.from(events) as event}
		<section class="card p-4 my-4 w-2/3">
			<div class="post-head mx-auto flex md:flex-row flex-col">
				<div>
					<Avatar
						src="lukas small.jpg"
						class="mr-4 mt-1"
						initials="LV"
						width="w-10"
						background="bg-primary-500"
					/>
				</div>
				<div>
					<div class="font-bold">Lukas Vozda</div>
					<span class="text-sm">@lukas</span>
				</div>
			</div>
			<p class="my-2 text-lg">{event.content}</p>
			<p class="text-sm">{new Date(Number(event.created_at) * 1000)}</p>
		</section>
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style>
</style>
