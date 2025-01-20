<script lang="ts">
	import { onMount } from 'svelte';
	let loading = false
	let items = [] as any
	let page = 1
	let limit = 20

	onMount(async () => {
		await fetchItems(page)
	})

	async function fetchItems(page: number) {
    loading = true
    // Simulating an API call with a timeout
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newItems = Array.from({ length: limit }, (_, i) => (page - 1) * limit + i + 1);
		console.log(items, newItems)
    items = [...items, ...newItems];
		page += 1
    loading = false;
  }
</script>

<div class="p-4">
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
		{#each items as i}
			<div class="border transition-all ease-in-out duration-300 rounded p-4 bg-white hover:bg-indigo-100">
				<img src="https://picsum.photos/id/{i}/200" alt="Logo" height="200" width="200" class="rounded mx-auto mb-3" />
				<div>Card {i}</div>
			</div>
		{/each}
	</div>
	<div class="flex justify-center">
		<button disabled={loading} class="rounded bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 disabled:opacity-50" on:click={() => fetchItems(page)}>
			{loading ? 'Loading...' : 'Load More'}
		</button>
	</div>
</div>
