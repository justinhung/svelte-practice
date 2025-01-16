<script lang="ts">
  export let href, children, dropDownList;
  
  let isOpen = false
</script>

<div class="relative inline-block text-left">
  <a href={href} class="flex items-center gap-1 text-indigo-600" on:mouseenter={() => (isOpen = true)}
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
  <div class={`absolute transition ease-in-out duration-100 left-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"  style={`display: ${isOpen ? 'block' : 'none'}`} on:mouseenter={() => (isOpen = true)}
    on:mouseleave={() => (isOpen = false)}>
    <div class="py-1 transition-all ease-in-out duration-300" role="none">
      {@render dropDownList()}
      <!-- Active: "bg-gray-100 text-gray-900 outline-none", Not Active: "text-gray-700"
      <a href="#" class="block px-4 py-2 text-sm text-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-100" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-100" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
      <form method="POST" action="#" role="none">
        <button type="submit" class="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
      </form> -->
    </div>
  </div>
</div>