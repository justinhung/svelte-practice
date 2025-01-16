<script lang="ts">
  import { fade } from 'svelte/transition'
  export let href, children, dropDownList;
  
  let isOpen = false
</script>

<div class="relative inline-block text-left">
  <a href={href} class="flex items-center text-indigo-600 py-4" on:mouseenter={() => (isOpen = true)}
    on:mouseleave={() => (isOpen = false)}>
    {@render children()}
    <svg class="-mr-1 size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
      <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  </a>

  <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
  {#if isOpen}
    <div transition:fade={{ duration: 100 }} class={`absolute left-0 top-14 z-10 w-56 rounded-md rounded-t-none bg-indigo-100 shadow`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1" on:mouseenter={() => (isOpen = true)}
      on:mouseleave={() => (isOpen = false)}>
      <div class="py-1 transition-all ease-in-out duration-300" role="none">
        <ul class="list-none">
          {@render dropDownList()}
        </ul>
      </div>
    </div>
  {/if}
</div>