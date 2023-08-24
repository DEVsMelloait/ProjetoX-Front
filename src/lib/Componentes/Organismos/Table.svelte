<script lang="ts">
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";
  export let data: any;
  export let Header: any;
  export const Editar = Boolean;
</script>

<Table shadow hoverable={true}>
  <TableHead>
    {#each Header.filter((f) => !f.action) as colunas}
      <TableHeadCell>{colunas.label}</TableHeadCell>
    {/each}
    {#if Header }
    <TableHeadCell>Ações</TableHeadCell>
    {/if}
  
  </TableHead>

  <TableBody>
    {#each data as dados}
      <TableBodyRow>
        {#each Header.filter((f) => !f.action) as colunas}
          <TableBodyCell>{dados[colunas.key]}</TableBodyCell>
        {/each}
        {#if Header}
        <TableBodyCell >
          <a
            href="/tables"
            class=" text-primary-600 hover:underline dark:text-primary-500"
          >
            Editar
          </a>
          /
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Excluir
          </a>
        </TableBodyCell>
        {/if}
       
      </TableBodyRow>
    {/each}
  </TableBody>
</Table>
