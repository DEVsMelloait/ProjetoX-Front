 <script>

import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte';
    let formModal = false;
    let edit = false;
    let acao;

    
 </script>

<div class="p-8">
    <Button on:click={() => (formModal = true)}>Novo Cliente</Button>

    <Modal bind:open={formModal} size="md" autoclose={false} class="w-full">
        <form class="flex flex-col space-y-6" action="#">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">{edit == true ? "Editar" : "Adicionar"} Cliente</h3>
          <Label class="space-y-2">
            <span>Nome</span>
            <Input type="text" name="name" placeholder="Nome" required />
          </Label>
          <Label class="space-y-2">
            <span>Email</span>
            <Input type="email" name="email" placeholder="nome@empresa.com" required />
          </Label> 
          <Label class="space-y-2">
            <span>Telefone</span>
            <Input type="text" name="phone" placeholder="(xx) xxxxx-xxxx" required />
          </Label>
          <Button type="submit" class="w-full1">{edit == true ? "Editar" : "Adicionar"}</Button>
        </form>
      </Modal>
</div>