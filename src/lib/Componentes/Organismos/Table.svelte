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
  import { CheckCircleOutline, FilePenOutline,CloseCircleSolid } from 'flowbite-svelte-icons';

  let popupModal = false;
  let idActions: any = null;
  let statusActions: any;
  export let data: any;
  export let Header: any;
  export const Editar = Boolean;

  const dispatch = createEventDispatcher();
  function modalAction(id: number, status: boolean): void {
    idActions = id;
    statusActions = status;
    popupModal = true;
  }
  function action() {
    if(statusActions == true){

      dispatch("deleteData", {
        item: idActions,
      });
    }else{
      dispatch("activeData", {
        item: idActions,
      });
    }
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

              <Button style="width:85px;padding-right: 5px;" on:click={() => editar(dado)} pill color="yellow"
                >
                Editar  
                <FilePenOutline style=" height: 15px;margin-left: 3px;"/>
                </Button
              >
              {#if dado.status == true }
              <Button style="width: 80px ;padding-left: 5px;" on:click={() => modalAction(dado.id, true)} pill color="red"
                >
                <CloseCircleSolid style=" height: 15px; "/>
                Inativa</Button
              >
              {:else}
              <Button style="width: 80px; padding-left: 5px;" on:click={() => modalAction(dado.id, false)} pill color="green"
                >
                <CheckCircleOutline style=" height: 15px;margin-right: 4px;"/>
                Ativar</Button
              >
              {/if}
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
      Tem certeza que deseja { statusActions == true ?  "inativar": "Ativar"} ?
    </h3>
    <Button color="red" class="mr-2" on:click={action}>Tenho certeza!</Button>
    <Button color="alternative">Cancelar</Button>
  </div>
</Modal>
