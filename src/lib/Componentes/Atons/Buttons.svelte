<script>
    import { Button } from 'flowbite-svelte';
    export const pill = {Boolean};
    export const label = "";
    export const href = "";
    export const size = "";
    /* xs sm md lg xl */
    export const disabled = {Boolean};

</script>

{#if pill}
<Button {href} {size} pill>{label}</Button>
{:else}
<Button {href} {size} >{label}</Button>
{/if}
