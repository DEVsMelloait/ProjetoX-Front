<script lang="ts">
    import Table from "$lib/Componentes/Organismos/Table.svelte";
    // import { text } from "@sveltejs/kit";
    import { Button, Modal, Label, Input, Select } from "flowbite-svelte";
    import { onMount } from "svelte";
    import { GetAll, Post } from "../../core/services/ProductService";
    import { GetAll as GetCategoria } from "../../core/services/CategoriaService";
    import Swal from "sweetalert2";
    import type { Product } from "../../core/models/Product";
    import type { Categoria } from "../../core/models/Categoria";

    let formModal = false;
    let edit = false;

    // campos do produto
    let nome: string = "";
    let categoria: string = "";
    let precoFim: number = 0;
    let precoCusto: number = 0;
    let item: Product = {
        name: "",
        tipo: 1,
        categoriaId: 0,
        preco_custo: 0,
        preco_final: 0,
        suppliersId: 0,
    };
    let itens: Product[] = [];
    let categorias: Categoria[] = [];
    let cat: any[] = [];

    const Header = [
        { label: "Nome", key: "name" },
        { label: "Categoria", key: "categoria" },
        { label: "Preço Final", key: "preco_final" },
        { label: "Preço Custo", key: "preco_custo" },
        { label: "Ações", action: true },
    ];

    async function Criar() {
        debugger
        let restorno = await Post(item);
        if (restorno) {
            Swal.fire({
                icon: "success",
                title: "Sucesso",
                text: "Produto adicionado com sucesso!",
            }).then(() => {
                formModal = false;
                loadAll(); 
            })
        }
    }

    onMount(async () => {
        // get all
        loadAll();
        loadCategoria();
       
    });

    async function loadCategoria() {
        categorias = await GetCategoria();
        categorias.forEach((f) => {
            cat.push({ value: f.id, name: f.name });
        });
    }
    async function loadAll() {
        itens = await GetAll();
    }

</script>

<div class="p-8">
    <Table {Header} data={itens} />
    <div style=" text-align: end; margin-top: 15px; ">
        <Button on:click={() => (formModal = true)}>Novo Produto</Button>
    </div>

    <!-- Modal -->
    <Modal bind:open={formModal} size="md" autoclose={true} class="w-full">
        <form class="flex flex-col space-y-6" action="#">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                {edit == true ? "Editar" : "Adicionar"} Produto
            </h3>
            <Label class="space-y-2">
                <span>Nome</span>
                <Input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    bind:value={item.name}
                />
            </Label>

            <Label>
                Categoria
                <Select
                    class="mt-2"
                    items={cat}
                    bind:value={item.categoriaId}
                    placeholder="Selecione"
                />
            </Label>
            <Label class="space-y-2">
                <span>Preço final</span>
                <Input
                    type="number"
                    name="preco"
                    placeholder="R$:10,00"
                    bind:value={item.preco_final}
                />
            </Label>
            <Label class="space-y-2">
                <span>Preço de custo</span>
                <Input
                    type="number"
                    name="preco"
                    placeholder="10,00"
                    bind:value={item.preco_custo}
                />
            </Label>
            <Button type="submit" class="w-full1" on:click={Criar}
                >{edit == true ? "Editar" : "Adicionar"}</Button
            >
        </form>
    </Modal>
</div>
