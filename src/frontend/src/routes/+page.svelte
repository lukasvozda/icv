<script lang="ts">
	import { createActor } from '../../../declarations/backend';

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
				timeout: 10000,
				background: 'variant-filled-primary',
			};
			toastStore.trigger(t);
		} catch (err: unknown) {
			console.error(err);
		}

		disabled = false;
	};
</script>

<main>
	<section>
		<div class="container mx-auto flex px-5 md:py-24 md:flex-row flex-col ">
			<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
				<h1 class="h1">Lukas Vozda</h1>
				<h2 class="mb-4">CTO at Proficio & Indie Developer</h2>
				<p class="mb-8 leading-relaxed">I'm a tech and data enthusiast and have been working for 7 years as a Head of Analytics & CTO at Proficio. I write about my work and my other passions on my blog. Want to know more about my skills and carrier? Check out my online resume.</p>
				<div class="flex">
					<a href="/blog" class="inline-flex btn btn-lg variant-filled ">
						<svg class="mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
							<path
								d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
							<path
								d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
						</svg>
						View my blogposts</a>
					<a href="/resume" class="inline-flex btn btn-lg variant-filled ml-4">
						<svg class="mr-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"></path>
						</svg>
						View my resume</a>
				</div>
			</div>
			<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-full">
				<img class="object-cover object-center rounded" alt="hero" src="lukas500.webp">
			</div>
		</div>
	</section>
	<hr class="!border-t-8 !border-double my-8 sm:my-0" />
	<section>
		<div class="container md:py-24">
			<h1 class="h1">What I do</h1>
			<p>I have 8+ years experience of performing in an online commerce enviroment and as a freelance analyst/developer. I went through a lot of online business models (from B2B to ecommerce) and helped our clients build realiable and automated reporting. Started off as a single analyst in the company, grew up to the team of 10 people. Below are my skills and tools that I use daily.</p>
		</div>
	</section>	

	<section>
		<div class="container  mx-auto">
			<div class="flex flex-wrap">
				<div class="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-6">
					<h2 class="text-lg sm:text-xl mb-2">Shooting Stars</h2>
					<p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
				</div>
				<div class="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-6">
					<h2 class="text-lg sm:text-xl mb-2">The Catalyzer</h2>
					<p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
				</div>
				<div class="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-6">
					<h2 class="text-lg sm:text-xl mb-2">Neptune</h2>
					<p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
				</div>
				<div class="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-6">
					<h2 class="text-lg sm:text-xl mb-2">Melanchole</h2>
					<p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
				</div>
			</div>
		</div>
	</section>	
			<!-- <h1 class="h1">
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
	</h1> -->


	<!-- <img src="logo2.svg" alt="DFINITY logo" />
	<br />
	<br /> -->
	<!-- <form on:submit|preventDefault={handleOnSubmit}>
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
	</section> -->

	

	<Toast />
</main>

<style lang="scss">
	:root {
		--theme-font-family-base: 'Quicksand', sans-serif;
		--theme-font-family-heading: 'Quicksand', sans-serif;
		/* ... */
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
