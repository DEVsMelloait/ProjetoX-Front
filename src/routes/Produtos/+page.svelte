<script>
    import Table from "$lib/Componentes/Organismos/Table.svelte";
    import { Button, Modal, Label, Input, Checkbox } from "flowbite-svelte";
    let formModal = false;
    let edit = false;

    const Header = [
        { label: "Nome", key: "label" }, 
        { label: "Categoria", key: "categoria" },
        { label: "Preço", key: "preco" },
        { label: "Ações", action: true },
    ];
    const item = [
        { label: "juju", categoria: "teste", preco: "123,00" },
        { label: "juju", categoria: "teste", preco: "123,00" }, 
        { label: "juju", categoria: "teste", preco: "123,00" }, 
        { label: "juju", categoria: "teste", preco: "123,00" }, 
        { label: "juju", categoria: "teste", preco: "123,00" }, 
    ];
</script>

<div class="p-8">
   

    <Table {Header} data={item} />
    <div style=" text-align: end; margin-top: 15px; ">
        <Button on:click={() => (formModal = true)}>Novo Produto</Button>
      </div>
    
  <!-- Modal -->
  <Modal bind:open={formModal} size="md" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" action="#">
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
        {edit == true ? "Editar" : "Adicionar"} Cliente
      </h3>
      <Label class="space-y-2">
        <span>Nome</span>
        <Input type="text" name="name" placeholder="Nome" required />
      </Label>
      <Label class="space-y-2">
        <span>Categoria</span>
        <Input type="text" name="categoria" placeholder="Descartavel" required />
      </Label>
      <Label class="space-y-2">
        <span>Categoria</span>
        <Input type="number" name="preco" placeholder=10,00 required />
      </Label>
      <Button type="submit" class="w-full1"
        >{edit == true ? "Editar" : "Adicionar"}</Button
      >
    </form>
  </Modal>
</div>
