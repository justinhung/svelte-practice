<script lang="ts">
	import "../app.css";
	import Nav from "$lib/Nav.svelte";

	export let data, children

  let isDarkMode = false

  function toggleDarkMode() {
    isDarkMode = !isDarkMode
  }
</script>

<div class={`${isDarkMode ? 'dark' : ''} h-full`}>
  <div class="flex bg-indigo-300 dark:bg-indigo-950 p-4 justify-between items-center transition-all ease-in-out duration-300">
    <div class="flex-none">
      <img src="/favicon.png" alt="Logo" height="64" width="64" class="rounded" />
    </div>
    <div class="flex-grow mx-4 text-center">
      <div class="text-3xl font-bold text-indigo-800 dark:text-indigo-300 transition-all ease-in-out duration-300">
        SVELTE
      </div>
    </div>
    <div class="flex-initial">
      <button class="rounded bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 hover:dark:bg-indigo-600 text-white py-2 px-4 transition-all ease-in-out duration-300 " on:click={toggleDarkMode}>{isDarkMode ? '☀️' : '🌙'}</button>
    </div>
  </div>

  <Nav data={data} />

  {@render children()}
</div>
