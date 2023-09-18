<script lang="ts">
  import {
    Button,
    ButtonGroup,
    Modal,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";
  import { createEventDispatcher } from "svelte";
  let popupModal = false;
  let idD: any = null;
  export let data: any;
  export let Header: any;
  export const Editar = Boolean;

  const dispatch = createEventDispatcher();
  function deletarModal(id: number): void {
    debugger;
    idD = id;
    popupModal = true;
  }
  function deletar() {
    debugger;
    dispatch("deleteData", {
      item: idD,
    });
  }
  function editar(data: any) {
    dispatch("editData", {
      item: data,
    });
  }

  function ler(data: any, column: string) {
    let dado: any;
    column.split(".").map((x) => {
      if (!dado) {
        dado = data[x];
      } else {
        dado = dado[x];
      }
    });

    return dado;
  }
</script>

<Table shadow hoverable={true}>
  <TableHead>
    {#each Header.filter((f) => !f.action) as colunas}
      <TableHeadCell style="text-align: center;">{colunas.label}</TableHeadCell>
    {/each}
    {#if Header}
      <TableHeadCell style="text-align: center;">Ações</TableHeadCell>
    {/if}
  </TableHead>

  <TableBody>
    {#each data as dado}
      <TableBodyRow>
        {#each Header.filter((f) => !f.action) as colunas}
          <TableBodyCell style="text-align: center;"
            >{ler(dado, colunas.key)}</TableBodyCell
          >
        {/each}
        {#if Header}
          <TableBodyCell style="text-align: center;">
            <ButtonGroup class="space-x-px">
              <Button on:click={() => editar(dado)} pill color="green"
                >Editar</Button
              >
              <Button on:click={() => deletarModal(dado.id)} pill color="red"
                >Excluir</Button
              >
            </ButtonGroup>
          </TableBodyCell>
        {/if}
        <!-- on:click={deleteData(dado.id)} -->
      </TableBodyRow>
    {:else}
      <h3>Carregando...</h3>
    {/each}
  </TableBody>
</Table>

<!-- Modal de confirmação -->
<Modal bind:open={popupModal} size="xs" autoclose>
  <div class="text-center">
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
      Tem certeza que deseja excluir?
    </h3>
    <Button color="red" class="mr-2" on:click={deletar}>Tenho certeza!</Button>
    <Button color="alternative">Cancelar</Button>
  </div>
</Modal>
