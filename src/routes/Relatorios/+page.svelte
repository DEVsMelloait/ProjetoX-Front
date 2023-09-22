
<script>
    import Table from '$lib/Componentes/Organismos/Table.svelte';
  import { AccordionItem, Accordion } from 'flowbite-svelte';
  import Menu from '$lib/Menu.svelte';


  const Header = [
        { label: "Produto", key: "label" },
        { label: "Valor de Vendas Totais", key: "categoria" },
        { label: "Custo dos Produtos", key: "email" },
        { label: "Estoque Atual", key: "preco" },
    ];
    const item = [
        {
            label: "TesteProduto",
            categoria: "R$ 280,00",
            email: "R$ 150,00",
            preco: "90",
        },
    ];
</script>

<Accordion flush>
  <AccordionItem>
    <Menu></Menu>
    <span slot="header">Relatorio de vendas</span>
    <Table {Header} data={item} />
  </AccordionItem>
  <AccordionItem>
    <span slot="header">Relatorio de Produtos</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>