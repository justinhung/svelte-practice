<script>
	import Dropdown from "./Dropdown.svelte";

  export let data
</script>

<div class="flex bg-indigo-100 space-x-4">
  {#each data.sections as section}
    <Dropdown href="/settings/{section.slug}">
		  <div class="text-indigo-600 font-medium hover:text-indigo-700 pl-4">{section.title}</div>

      {#snippet dropDownList()}
        {#each section.links as link}
          <li class="pl-4">
            <a href="/{link.slug}" class="flex items-center gap-2 p-2 hover:bg-base-200 text-indigo-600 hover:font-medium">
              {link.title}
            </a>
          </li>
        {/each}
      {/snippet}
    </Dropdown>
	{/each}
</div>
