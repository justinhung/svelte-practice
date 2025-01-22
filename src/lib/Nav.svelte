<script>
	import Dropdown from "./Dropdown.svelte";

  export let data
</script>

<div class="flex bg-indigo-100 dark:bg-indigo-900 space-x-4 transition-all ease-in-out duration-300">
  {#each data.sections as section}
    <Dropdown href="/{section.slug}">
		  <div class="text-indigo-600 dark:text-indigo-300 font-medium hover:text-indigo-700 hover:dark:text-indigo-400 pl-4 transition-all ease-in-out duration-300">{section.title}</div>

      {#snippet dropDownList()}
        {#each section.links as link}
          <li class="pl-4">
            <a href="/{section.slug}/{link.slug}" class="flex items-center gap-2 p-2 hover:bg-base-200 hover:dark:bg-base-800 text-indigo-600 hover:font-medium">
              {link.title}
            </a>
          </li>
        {/each}
      {/snippet}
    </Dropdown>
	{/each}
</div>
