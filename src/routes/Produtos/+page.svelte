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
        Toggle,
    } from "flowbite-svelte";
    import { onMount } from "svelte";
    import {
        GetAll,
        Post,
        Delete,
        Edit,
        Active
    } from "../../core/services/ProductService";
    import { GetAll as GetCategoria } from "../../core/services/CategoriaService";
    import type { Product } from "../../core/models/Product";
    import type { Categoria } from "../../core/models/Categoria";
    import { FileCirclePlusOutline, PlusOutline  } from 'flowbite-svelte-icons';

    
    let title = "Produto";
    let showInactive = false;
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
        item.id = event.detail.item.id;
        item.name = event.detail.item.name;
        item.tipo = event.detail.item.tipo;
        item.categoriaId = event.detail.item.categoriaId;
        item.preco_custo = event.detail.item.preco_custo;
        item.preco_final = event.detail.item.preco_final;
        item.suppliersId = event.detail.item.suppliersId;
        formModal = true;
    }

    async function Ativar(event: any) {
        let retorno = await Active(event.detail.item);
        if (retorno) {
        }
        loadAll();
    }
    async function Deletar(event: any) {
        let retorno = await Delete(event.detail.item);
        if (retorno) {
        }
        loadAll();
    }

    function abrirModal() {
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
        if(showInactive == false){ 
            itens = itens.filter((el) => el.status === true);
        }else{
            itens = itens.filter((el) => el.status === false);
        }
    }

    function changeLista(){
        debugger
        showInactive = !showInactive;
        loadAll();
    }
</script>

<div class="p-8">
    <div style="margin: 1%; display:flex ;justify-content: space-between;">
        <Toggle checked={showInactive} on:click={changeLista}>{showInactive == true ? "Mostrar inativos" : "Mostrar ativos"}</Toggle>
     
        <Button on:click={abrirModal}>
            <FileCirclePlusOutline style=" height: 15px;margin-right: 4px;"/>
            Novo {title}</Button>
    </div>

    <Table
        {Header}
        data={itens}
        on:deleteData={(x) => Deletar(x)}
        on:editData={(x) => Editar(x)}
        on:activeData={(x) => Ativar(x) }
    />
    
    <!-- Modal -->
    <Modal bind:open={formModal} size="md" autoclose={true} class="w-full">
        <form class="flex flex-col space-y-6" action="#">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                {editar == true ? "Editar" : "Adicionar"} {title}
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
