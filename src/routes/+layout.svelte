<script lang="ts">
	import "../app.css";
	import Nav from "$lib/Nav.svelte";

	export let data, children

  let isDarkMode = false

  function toggleDarkMode() {
    isDarkMode = !isDarkMode
  }
</script>

<div class={`${isDarkMode ? 'dark' : ''} flex bg-indigo-300 dark:bg-gray-800 p-4 justify-between items-center`}>
	<div class="flex-none">
    <img src="/favicon.png" alt="Logo" height="64" width="64" class="rounded" />
  </div>
  <div class="flex-grow mx-4 text-center">
		<div class="text-3xl font-bold text-indigo-700">
			SVELTE
		</div>
  </div>
  <div class="flex-initial">
    <button class="rounded bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4" on:click={toggleDarkMode}>Toggle</button>
  </div>
</div>

<Nav data={data} />

{@render children()}