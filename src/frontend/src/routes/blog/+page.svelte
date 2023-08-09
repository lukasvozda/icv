<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<h1 class="h1">Blog</h1>
<div class="w-full text-token grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
	<!-- Detailed -->
	{#each { length: 8 } as _, i}
		<a class="card variant-soft card-hover overflow-hidden" href="#">
			<header>
				<img src="img3.jpg" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
			</header>
			<div class="p-4 space-y-4">
				<h3 class="h3" data-toc-ignore>Skeleton is Awesome!</h3>

				<article>
					<p>
						<!-- cspell:disable -->
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet
						eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias
						cum expedita architecto itaque quae rem.
						<!-- cspell:enable -->
					</p>
				</article>
				<span class="badge variant-filled">#coding</span>
				<span class="badge variant-filled">#svelte</span>
				<span class="badge variant-filled">#icp</span>
			</div>
			<hr class="opacity-50" />
			<footer class="p-4 flex justify-start items-center space-x-4">
				<Avatar src="lukas2.jpg" width="w-8" />
				<div class="flex-auto flex justify-between items-center">
					<h6 class="font-bold">By Lukas</h6>
					<small>On {new Date().toLocaleDateString()}</small>
				</div>
			</footer>
		</a>
	{/each}
</div>
