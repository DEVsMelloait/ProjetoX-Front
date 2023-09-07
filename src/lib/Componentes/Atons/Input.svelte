<script lang="ts">
 
  import { Input, Label, Helper } from 'flowbite-svelte';
  
    export let label : any;
    export let placeholder : any;
    export let type : any;
    export let classe : any;
    export let required: Boolean;

  </script>

  <div>
    <Label for="{label}" class="mb-2">{label}</Label>
    {#if required}
    <Input class="{classe}" type={type} id="{label}" {placeholder} required  />
    {:else}
    <Input class="{classe}" type={type} id="{label}" {placeholder} />
    {/if}
  </div>