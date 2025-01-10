<script lang="ts">
	function greet() {
		alert('Welcome to Svelte!');
	}
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
	{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as i}
		<div class="border rounded p-4">
			Card {i}
		</div>
	{/each}
	
</div>
<button onclick={greet}>click me</button>

<style>
	button {
		font-size: 2em;
	}
</style>