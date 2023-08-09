<script lang="ts">
	export const prerender = true;

	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import {
		AppShell,
		AppBar,
		Avatar,
		Drawer,
		drawerStore,
		modeCurrent,
		setModeCurrent
	} from '@skeletonlabs/skeleton';
	import { setInitialClassState } from '@skeletonlabs/skeleton';

	import Navigation from '../lib/components/navigation.svelte';

	import { navigating } from '$app/stores';
	import { loading } from '$lib/stores/loading.store';
	import Loading from '$lib/components/Loading.svelte';
	import { Toast } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	$: $loading = !!$navigating;

	let classSidebar = 'w-0 lg:w-64';

	function drawerOpen() {
		drawerStore.open({});
	}
	onMount(() => setModeCurrent(false));

	//console.log(setInitialClassState.toString())

	function sidebarToggle() {
		//alert("Toggle")
		classSidebar = classSidebar === 'w-0 lg:w-64' ? '' : 'w-0 lg:w-64';
	}
</script>

<!-- <Drawer width="auto" class="hide-scrollbar">
	<hr />
	<Navigation />
</Drawer> -->
<AppShell slotSidebarLeft={classSidebar}>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={sidebarToggle}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4 icon">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<a href="/">
						<Avatar
							src="lukas2.jpg"
							border="border-2 border-surface-300-600-token hover:!border-primary-500"
							class="mr-4"
							initials="LV"
							width="w-12"
							background="bg-primary-500"
						/>
					</a>
					<strong class="text-xl">lukasvozda.rocks</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="/admin" class="btn variant-soft">
					<svg
						class="icon"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"
						/>
					</svg>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
		<!-- <section class="p-4 pb-20 space-y-4 overflow-y-auto">
			<p class="font-bold pl-4 text-2xl">Titulek</p>
				<p class="font-bold pl-4 text-2xl">Title</p>
				<nav class="list-nav">
					<ul>
							<li>
								<a href="#" data-sveltekit-preload-data="hover">
									<span class="flex-auto">"Label"</span>
									<span class="badge variant-filled-secondary">Badge</span>
								</a>
							</li>
					</ul>
				</nav>
		</section> -->
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<div class="container md:mx-auto p-8">
		<Loading />
		<slot />
	</div>
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- <svelte:fragment slot="pageFooter">Footer</svelte:fragment>
	<svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
<Toast />

<style global>
	.icon {
		max-width: 30px !important;
		display: block;
		text-align: center;
		width: 20px;
	}

	.lightswitch-track {
		display: block;
		text-align: center;
		margin: auto;
		margin-bottom: 20px;
	}

	#page-content {
		position: relative;
	}
</style>
