<script lang="ts">
    import Endereco from "$lib/Componentes/Moleculas/Endereco.svelte";
import Table from "$lib/Componentes/Organismos/Table.svelte";

    import { Button, Modal, Label, Input, Checkbox } from "flowbite-svelte";
    let formModal = false;
    let edit = false;
    let EnderecoCliente = {
        Cep: "22740-260",
        Logradouro: "Rua Monsenhor maques",
        Numero: "841",
        Complemento: "Casa"
    }

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

 
    function attEndereco(x: any){
        EnderecoCliente.Cep = x.Cep;
        EnderecoCliente.Logradouro = x.Logradouro;
        EnderecoCliente.Numero = x.Numero;
        EnderecoCliente.Complemento = x.Complemento;

    }
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
            <div>
                <Label for="name" class="mb-6">Nome</Label>
                <Input type="text" name="name" placeholder="Nome" required />
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <Label for="email" class="mb-2">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="nome@empresa.com"
                    />
                </div>
                <div>
                    <Label for="phone" class="mb-2">Telefone</Label>
                    <Input
                        type="tel"
                        name="phone"
                        placeholder="(xx) xxxxx-xxxx" 
                    />
                </div>
            </div>
            <Endereco on:endereco={attEndereco} bind:Endereco={EnderecoCliente} />
            {EnderecoCliente.Cep}
            <Button type="submit" class="w-full1"
                >{edit == true ? "Editar" : "Adicionar"}</Button
            >
        </form>
    </Modal>
</div>
