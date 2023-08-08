<script>
 
  import { Input, Label, Helper } from 'flowbite-svelte';
  
    export const label = "";
    export const placeholder = "";
    export const required = {Boolean};


  </script>

  <div>
    <Label for="first_name" class="mb-2">First name</Label>

    {#if required}
    <Input type="text" id="first_name" {placeholder} required  />
    {:else}
    <Input type="text" id="first_name" {placeholder} />
    {/if}
  </div>