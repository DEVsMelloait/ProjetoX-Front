<script>
    import Menu from '$lib/Menu.svelte';
    import Table from '$lib/Table.svelte';
	import { Alert } from 'flowbite-svelte';

    const Header = [
        {label:"jujuba1"},
        {label:"jujuba2"},
        {label:"jujuba3"},
        ];
    const item = [
        {label:"juju", cor:"azul",categoria:"teste",preco:"123,00"}
        ]
</script>

<div class="p-8">
   
<Table Header={Header} data={item} />
</div>