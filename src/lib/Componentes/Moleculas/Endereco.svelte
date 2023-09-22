<script lang="ts">
    import Input from "../Atons/Input.svelte";
    import { createEventDispatcher } from "svelte";
    export let Endereco: any;
    const dispatch = createEventDispatcher();

    function enviarEndereco(){
        dispatch('endereco', {
            item: Endereco
        });
    }
</script>
<div class="grid gap-6 mb-6 md:grid-cols-2">
    <Input classe="mb-2" label="Cep" placeholder="00000-000" bind:value={Endereco.Cep} />
    <Input classe="mb-2"  label="Logradouro" placeholder="Rua exemplo de algum lugar" bind:value={Endereco.Logradouro}/>
    <Input classe="mb-2" label="N°" placeholder=123 bind:value={Endereco.Numero} />
    <Input classe="mb-2" label="Complemento" placeholder="Casa" bind:value={Endereco.Complemento}/>
</div>

