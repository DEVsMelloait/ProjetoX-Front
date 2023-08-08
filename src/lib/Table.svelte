<script lang="ts">
    import { DarkMode, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import AnchorSelected from './Componentes/Atons/Anchor-Selected.svelte';
    export let data: any;
    
    export let Header: any ;
    
    export const Editar = Boolean;
 </script>
  
  <Table striped={true}>
    <TableHead>
        {#each Header as colunas }
             <TableHeadCell>{colunas.label}</TableHeadCell>
        {/each}
      <TableHeadCell></TableHeadCell>
    </TableHead> 

    <TableBody>
         {#each data as dados}
        <TableBodyRow>
        <TableBodyCell>{dados.label}</TableBodyCell>     
        <TableBodyCell>{dados.cor}</TableBodyCell>     
        <TableBodyCell>{dados.categoria}</TableBodyCell>     
        <TableBodyCell> R${dados.preco}</TableBodyCell>  
        <TableBodyCell>
      
          <a href="/tables"  class=" text-primary-600 hover:underline dark:text-primary-500">
            Editar
          </a>
          

          <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
            Excluir
          </a>
 
        </TableBodyCell>  
      </TableBodyRow> 
        {/each} 
    </TableBody> 
  </Table>

 