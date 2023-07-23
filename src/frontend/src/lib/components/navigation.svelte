<script>
	import { page } from '$app/stores';

	import { AppRail, AppRailAnchor, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppRail height="h-full">
	<!-- --- -->
	<AppRailAnchor href="/" title="Account" selected={$page.url.pathname === '/'}>
		<svelte:fragment slot="lead">
			<svg
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					clip-rule="evenodd"
					fill-rule="evenodd"
					d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
				/>
			</svg>
		</svelte:fragment>
		<span>Home</span>
	</AppRailAnchor>
	<AppRailAnchor href="blog" title="Account" selected={$page.url.pathname === '/blog'}>
		<svelte:fragment slot="lead">
			<svg
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"
				/>
				<path
					d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"
				/>
			</svg>
		</svelte:fragment>
		<span>Blog</span>
	</AppRailAnchor>
	<AppRailAnchor href="resume" title="Account" selected={$page.url.pathname === '/resume'}>
		<svelte:fragment slot="lead">
			<svg
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
					d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
				/>
			</svg>
		</svelte:fragment>
		<span>Resume</span>
	</AppRailAnchor>
	<AppRailAnchor href="nostr" title="Account" selected={$page.url.pathname === '/nostr'}>
		<svelte:fragment slot="lead">
			<svg
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
					d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
				/>
			</svg>
		</svelte:fragment>
		<span>Nostric</span>
	</AppRailAnchor>
	<!-- --- -->
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppRail>
