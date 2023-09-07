<script>
  import Table from "$lib/Componentes/Organismos/Table.svelte";

  import { Button, Modal, Label, Input, Checkbox } from "flowbite-svelte";
  let formModal = false;
  let edit = false;

  const Header = [
    { label: "Nome", key: "label" },
    { label: "Email", key: "email" },
    { label: "Preço", key: "preco" },
    { label: "Ações", action: true },
  ];
  const item = [
    {
      label: "juju",
      categoria: "teste",
      email: "email@email.com",
      preco: "123,00",
    },
    {
      label: "juju",
      categoria: "teste",
      email: "email@email.com",
      preco: "123,00",
    },
    {
      label: "juju",
      categoria: "teste",
      email: "email@email.com",
      preco: "123,00",
    },
    {
      label: "juju",
      categoria: "teste",
      email: "email@email.com",
      preco: "123,00",
    },
    {
      label: "juju",
      categoria: "teste",
      email: "email@email.com",
      preco: "123,00",
    },
  ];
</script>

<div class="p-8">

  <Table {Header} data={item} />
  <div style=" text-align: end; margin-top: 15px; ">
    <Button on:click={() => (formModal = true)}>Novo Cliente</Button>
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
        <span>Email</span>
        <Input type="email" name="email" placeholder="nome@empresa.com" />
      </Label>
      <Label class="space-y-2">
        <span>Telefone</span>
        <Input type="number" name="phone" placeholder="(xx) xxxxx-xxxx" />
      </Label>
      <Label class="space-y-2">
        <span>Rua</span>
        <Input type="text" name="rua" placeholder="Rua exemplo do exemplo" />
      </Label>
      <Label class="space-y-2">
        <span>Bairro</span>
        <Input type="text" name="bairro" placeholder="exemplo" />
      </Label>
      <Label class="space-y-2">
        <span>Numero</span>
        <Input type="email" name="numero" placeholder="132" />
      </Label>
      <Label class="space-y-2">
        <span>Complemento</span>
        <Input type="text" name="complemento" placeholder="apt. 132" />
      </Label>
      <Button type="submit" class="w-full1"
        >{edit == true ? "Editar" : "Adicionar"}</Button
      >
    </form>
  </Modal>
</div>
