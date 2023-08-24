<script>
    import Table from "$lib/Componentes/Organismos/Table.svelte";

    const Header = [
        { label: "Nome", key: "label" },
        { label: "Cor", key: "cor" },
        { label: "Categoria", key: "categoria" },
        { label: "Preço", key: "preco" },
        { label: "Ações", action: true },
    ];
    const item = [
        { label: "juju", cor: "azul", categoria: "teste", preco: "123,00" },
        { label: "juju", cor: "azul", categoria: "teste", preco: "123,00" },
        { label: "juju", cor: "azul", categoria: "teste", preco: "123,00" },
        { label: "juju", cor: "azul", categoria: "teste", preco: "123,00" },
        { label: "juju", cor: "azul", categoria: "teste", preco: "123,00" },
        { label: "juju", cor: "azul", categoria: "teste", preco: "123,00" },
        { label: "juju", cor: "azul", categoria: "teste", preco: "123,00" },
        { label: "juju", cor: "azul", categoria: "teste", preco: "123,00" },
    ];
</script>

<div class="p-8">
    <Table {Header} data={item} />
</div>
