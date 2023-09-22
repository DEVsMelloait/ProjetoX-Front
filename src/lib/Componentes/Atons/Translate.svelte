<script>
// @ts-nocheck

    import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
    // import { Icon } from 'flowbite-svelte-icons';
    let derivedObject;
    let selectedOption;
    let lang = [
        {lg:"PT-BR"},
        {lg:"EN-US"},
        {lg:"ES-MX"},
                 ]
    $: derivedObject = selectedOption ? selectedOption : {};
</script>

  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    {#each lang as lang}
    <option value={lang}>{lang.lg}</option>
    {/each}  
  </select>
  