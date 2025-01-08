<script lang="ts">
	import "../app.css";

	let { data, children } = $props();
</script>

<div class="flex bg-indigo-300 p-4 justify-between items-center">
	<div class="flex-none">
    <img src="https://picsum.photos/64" alt="Logo" height="64" width="64" class="rounded" />
  </div>
  <div class="flex-grow mx-4 text-center">
		<div class="text-3xl font-bold text-indigo-700">
			SVELTE
		</div>
  </div>
  <div class="flex-initial">

    <button class="rounded bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4">Login</button>
  </div>
</div>

<div class="submenu">
	{#each data.sections as section}
		<a href="/settings/{section.slug}">{section.title}</a>
	{/each}
</div>

{@render children()}