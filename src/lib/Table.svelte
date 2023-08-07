<script>
    import { DarkMode, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import AnchorSelected from './Componentes/Atons/Anchor-Selected.svelte';
    export const item = [
        { descricao: "Teste Produto", label: "Nome", cor:"branco", categoria:"jujuba"},] 
    export const Header = [{descricao: "Nome do produto", cor: "Cor", categoria: "Categoria" , preco: "Preço"   }]
    export const Editar = Boolean;
 </script>
  
  <Table striped={true}>
    <TableHead>
        {#each Header as colunas }
             <TableHeadCell>{colunas}</TableHeadCell>
        {/each}
      <TableHeadCell>
        <span class="sr-only"> Edit </span>
      </TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
        <TableBodyRow>
        {#each item as dados}
        <TableBodyCell>{dados}</TableBodyCell>     
        {/each}
        <TableBodyCell>
            <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
              Edit
            </a>
          </TableBodyCell>
        </TableBodyRow>



        {#each item as dados}
        <TableBodyRow>
            {#each dados as dado }
            <TableBodyCell>{dado}</TableBodyCell>   
            {/each}

        </TableBodyRow>
        {/each}

    </TableBody>
  



  </Table>

 