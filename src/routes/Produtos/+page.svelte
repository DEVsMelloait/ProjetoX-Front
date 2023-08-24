 
<script>
     import Table from '$lib/Table.svelte';
 
    const Header = [
        {label:"Nome"},
        {label:"Cor"},
        {label:"Categoria"},
        {label:"Preço"},
        {label:"Ações"},
        ];
    const item = [
        {label:"juju", cor:"azul",categoria:"teste",preco:"123,00"},
        {label:"juju", cor:"azul",categoria:"teste",preco:"123,00"},
        {label:"juju", cor:"azul",categoria:"teste",preco:"123,00"},
        {label:"juju", cor:"azul",categoria:"teste",preco:"123,00"},
        {label:"juju", cor:"azul",categoria:"teste",preco:"123,00"},
        {label:"juju", cor:"azul",categoria:"teste",preco:"123,00"},
        {label:"juju", cor:"azul",categoria:"teste",preco:"123,00"},
     
        ]

</script>
 <div class="p-8">

    <Table Header={Header} data={item} />
    </div>