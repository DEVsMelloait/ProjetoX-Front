<script lang="ts">
    import Table from "$lib/Componentes/Organismos/Table.svelte";
    // import { text } from "@sveltejs/kit";
    import {
        Button,
        Modal,
        Label,
        Input,
        Select,
        Datepicker,
    } from "flowbite-svelte";
    import { onMount } from "svelte";
    import {
        GetAll,
        Post,
        Delete,
        Edit,
    } from "../../core/services/ProductService";
    import { GetAll as GetCategoria } from "../../core/services/CategoriaService";
    import type { Product } from "../../core/models/Product";
    import type { Categoria } from "../../core/models/Categoria";

    let formModal = false;
    let editar = false;
    let item: Product = {
        name: "",
        tipo: 1,
        status: true,
        categoriaId: 0,
        preco_custo: 0,
        preco_final: 0,
        suppliersId: 0,
    };
    let itens: Product[] = [];
    let categorias: Categoria[] = [];
    let cat: any[] = [];
    let tip: any[] = [
        { value: 1, name: "Aluguel" },
        { value: 2, name: "Venda Unica" },
        { value: 3, name: "Retornavel" },
    ];

    const Header = [
        { label: "Nome", key: "name" },
        { label: "Categoria", key: "categoria.name" },
        { label: "Preço Final", key: "preco_final" },
        { label: "Preço Custo", key: "preco_custo" },
        { label: "Ações", action: true },
    ];

    async function CriarOrEditar() {
        debugger;
        let retorno;
        if (item.id) {
            retorno = await Edit(item, item.id);
            if (retorno) {
                alert("Editou");
            }
        } else {
            retorno = await Post(item);
            if (retorno) {
                alert("Criou");
            }
        }

        loadAll();
    }

    async function Editar(event: any) {
        editar = true;
        debugger;
        item.id = event.detail.item.id;
        item.name = event.detail.item.name;
        item.tipo = event.detail.item.tipo;
        item.categoriaId = event.detail.item.categoriaId;
        item.preco_custo = event.detail.item.preco_custo;
        item.preco_final = event.detail.item.preco_final;
        item.suppliersId = event.detail.item.suppliersId;
        formModal = true;
    }

    async function Deletar(event: any) {
        debugger;
        let retorno = await Delete(event.detail.item);
        if (retorno) {
        }
        loadAll();
    }

    function abrirModal() {
        debugger;
        item = {
            id: 0,
            name: "",
            categoriaId: 0,
            status: true,
            tipo: undefined,
            preco_custo: 0,
            preco_final: 0,
            suppliersId: 1,
        };
        formModal = true;
    }
    onMount(async () => {
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
        debugger;
        itens = await GetAll();
        itens = itens.filter((el) => el.status === true);
    }
</script>

<div class="p-8">
    <Table
        {Header}
        data={itens}
        on:deleteData={(x) => Deletar(x)}
        on:editData={(x) => Editar(x)}
    />
    <div style=" text-align: end; margin-top: 15px; ">
        <Button on:click={abrirModal}>Novo Produto</Button>
    </div>

    <!-- Modal -->
    <Modal bind:open={formModal} size="md" autoclose={true} class="w-full">
        <form class="flex flex-col space-y-6" action="#">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                {editar == true ? "Editar" : "Adicionar"} Produto
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


            <Label >
                Categoria
                <Select
                    class="mt-2"
                    items={cat}
                    bind:value={item.categoriaId}
                    placeholder="Selecione"
                />
            </Label>
            <!-- <div style="display: flex; justify-content: space-between;">
                <Label style="width: 45%;" class="space-y-2">
                    Categoria
                    <Select
                        class="mt-2"
                        items={cat}
                        bind:value={item.categoriaId}
                        placeholder="Selecione"
                    />
                </Label>

                <Label style="width: 45%;" class="space-y-2">
                    Tipo
                    <Select
                        class="mt-2"
                        items={tip}
                        bind:value={item.tipo}
                        placeholder="Selecione"
                    />
                </Label>
            </div> -->
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
            <Button type="submit" class="w-full1" on:click={CriarOrEditar}
                >{editar == true ? "Editar" : "Adicionar"}</Button
            >
        </form>
    </Modal>
</div>
