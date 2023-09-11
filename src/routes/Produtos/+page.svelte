<script lang="ts">
    import Table from "$lib/Componentes/Organismos/Table.svelte";
    import { text } from "@sveltejs/kit";
    import { Button, Modal, Label, Input, Checkbox, P } from "flowbite-svelte";
    import { onMount } from "svelte";
    interface Produto {
        id?: number;
        label: string;
        categoria: string;
        preco: number;
    }

    let formModal = false;
    let edit = false;

    // campos do produto 
    let nome: string = "";
    let categoria: string = "";
    let precoFim: number = 0;
    let precoCusto: number = 0;
    let retornavel: boolean = false;
    let suppliersId: number = 1;

    // item para mandar para a api
    let item: Produto = {
        id: 0,
        label: "",
        categoria: "",
        preco: 0,
    };

    const Header = [
        { label: "Nome", key: "label" },
        { label: "Categoria", key: "categoria" },
        { label: "Preço", key: "preco" },
        { label: "Ações", action: true },
    ];

    let itens: Produto[] = [{ label: "teste", categoria: "teste", preco: 123 }];
    let lista: [];

       async function addProduct() {
        
            
            const data={
                "name":nome,
                "categoria":categoria,
                "preco_final":precoFim,
                "suppliersId":suppliersId,
                "preco_custo":precoCusto,
                "retornavel":retornavel
            };
            const res=await fetch("http://localhost:8081/api/v1/product", {
                mode: 'no-cors',
                method:"POST",
                body:JSON.stringify(data),
                headers: { "content-type": "aplication/json"},
            }); 
            const output = await res.json();
            console.log(output);    
     

        itens.push(item);
        itens = itens;
    }

    // function editProduct() {
    //     const response = fetch(
    //         "http://localhost:8081/api/v1/product/" + item.id,
    //         {
    //             method: "PUT",
    //             headers: {
    //                 "content-type": "aplication/json",
    //             },
    //             body: JSON.stringify({
    //                 id: item.id,
    //                 nome: item.label,
    //                 categoria: item.categoria,
    //                 preco: item.preco,
    //             }),
    //         }
    //     );

    //     console.log(response);
    // }

    // function deleteProduct() {
    //     const response = fetch(
    //         "http://localhost:8081/api/v1/product/" + item.id,
    //         {
    //             method: "PUT",
    //         }
    //     );

    //     console.log(response);
    // }

    onMount(async () => {
        // get all
        debugger
        const response = await fetch("http://localhost:8081/api/v1/product", {
                mode: 'no-cors',
                method:"GET", 
            });  
        lista = await response.json();
        console.log(lista);
    });
</script>

<div class="p-8">
    <Table {Header} data={itens} />
    <div style=" text-align: end; margin-top: 15px; ">
        <Button on:click={() => (formModal = true)}>Novo Produto</Button>
    </div>

    <!-- Modal -->
    <Modal bind:open={formModal} size="md" autoclose={false} class="w-full">
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
                    bind:value={nome}
                />
            </Label>
            <Label class="space-y-2">
                <span>Categoria</span>
                <Input
                    type="text"
                    name="categoria"
                    placeholder="Descartavel"
                    bind:value={categoria}
                />
            </Label>
            <Label class="space-y-2">
                <span>Preço final</span>
                <Input
                    type="number"
                    name="preco"
                    placeholder="10,00"
                    bind:value={precoFim}
                />
            </Label>
            <Label class="space-y-2">
            <span>Preço de custo</span>
            <Input
                type="number"
                name="preco"
                placeholder="10,00"
                bind:value={precoCusto}
            />
        </Label>
            <Button type="submit" class="w-full1" on:click={addProduct}
                >{edit == true ? "Editar" : "Adicionar"}</Button
            >
        </form>
    </Modal>
</div>
