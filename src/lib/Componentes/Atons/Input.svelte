<script>
 
  import { Input, Label, Helper } from 'flowbite-svelte';
  
    export const label = "";
    export const placeholder = "";
    export const required = {Boolean};


  </script>

  <div>
    <Label for="{label}" class="mb-2">{label}</Label>
    {#if required}
    <Input type="text" id="{label}" {placeholder} required  />
    {:else}
    <Input type="text" id="{label}" {placeholder} />
    {/if}
  </div>