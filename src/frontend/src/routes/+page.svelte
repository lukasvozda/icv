<script lang="ts">
	import { createActor } from '../../../declarations/backend';

	import { LightSwitch } from '@skeletonlabs/skeleton';

	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	let input = '';
	let disabled = false;
	let greeting = '';

	const handleOnSubmit = async () => {
		disabled = true;
		console.log('submit');

		try {
			// Canister IDs are automatically expanded to .env config - see vite.config.ts
			const canisterId = import.meta.env.VITE_BACKEND_CANISTER_ID;

			// We pass the host instead of using a proxy to support NodeJS >= v17 (ViteJS issue: https://github.com/vitejs/vite/issues/4794)
			const host = import.meta.env.VITE_HOST;

			// Create an actor to interact with the IC for a particular canister ID
			const actor = createActor(canisterId, { agentOptions: { host } });

			// Call the IC
			greeting = await actor.greet(input);

			const t: ToastSettings = {
				message: greeting,
				timeout: 10000
			};
			toastStore.trigger(t);
		} catch (err: unknown) {
			console.error(err);
		}

		disabled = false;
	};
</script>

<main>
	<LightSwitch />

	<h1 class="h1">Skeleton H1</h1>
	<h2 class="h2">Skeleton H2</h2>
	<h3 class="h3">Skeleton H3</h3>
	<h4 class="h4">Skeleton H4</h4>
	<h5 class="h5">Skeleton H5</h5>
	<h6 class="h6">Skeleton H6</h6>

	<h1 class="h1">
		<span
			class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
			>Design.</span
		>
	</h1>
	<h1 class="h1">
		<span
			class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
			>Build.</span
		>
	</h1>
	<h1 class="h1">
		<span
			class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
			>Deploy.</span
		>
	</h1>

	<blockquote class="blockquote">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia atque consectetur saepe
		accusantium quam odio earum assumenda quisquam nesciunt voluptates consequuntur temporibus
		cupiditate id neque quo, suscipit recusandae laboriosam et.
	</blockquote>

	<img src="logo2.svg" alt="DFINITY logo" />
	<br />
	<br />
	<form on:submit|preventDefault={handleOnSubmit}>
		<label for="name">Enter your name:</label>
		<input
			id="name"
			alt="Name"
			class="input"
			type="text"
			placeholder="Input"
			bind:value={input}
			{disabled}
		/>

		<button type="submit" class="btn btn-lg variant-filled" {disabled}>Button</button>
	</form>
	{#if disabled}
		<ProgressRadial ... stroke={240} meter="stroke-primary-500" track="stroke-primary-500/30" />
	{/if}
	<section id="greeting">
		{greeting}
	</section>

	<Toast />
</main>

<style lang="scss">
	:root {
		--theme-font-family-base: 'Quicksand', sans-serif;
		--theme-font-family-heading: 'Quicksand', sans-serif;
		/* ... */
	}

	h1 {
		font-family: 'Quicksand', sans-serif;
	}
	img {
		max-width: 50vw;
		max-height: 25vw;
		display: block;
		margin: auto;
	}

	form {
		display: flex;
		justify-content: center;
		gap: 0.5em;
		flex-flow: row wrap;
		max-width: 40vw;
		margin: auto;
		align-items: baseline;
		font-size: 1.5rem;
	}

	#greeting {
		margin: 10px auto;
		padding: 10px 60px;
		border: 1px solid #222;
	}

	#greeting:empty {
		display: none;
	}
</style>
