<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
    import Logo from '../Atons/Logo.svelte';
    import { page } from '$app/stores';
    import Dark from '../Atons/Dark.svelte';
    import Translate from '../Atons/Translate.svelte';
    export const paginas = [
        { href: "/", label: "Início" },
        { href: "/Clientes", label: "Clientes" },
        { href: "/Fornecedores", label: "Fornecedores" },
        { href: "/Movimentacao", label: "Movimentacao" },
        { href: "/Produtos", label: "Produtos" },
        { href: "/Relatorios", label: "Relatorios" },
        { href: "/Vendas", label: "Vendas" },
        { href: "/Pagamentos", label: "Pagamentos" },
    ];
  </script>

<Navbar   class=" bg-gray-100 dark:bg-gray-800" let:hidden let:toggle>
    <NavBrand  href="/">
      <Logo/>
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        MelloAIT
      </span>
    </NavBrand>
 

    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        {#each paginas as {href,label} }
        {#if $page.url.pathname === href}
        <NavLi {href} active={true}>{label}</NavLi>
        {:else}
        <NavLi {href}>{label}</NavLi>
        {/if}
        {/each}
    </NavUl>
    <Dark/>
    <Translate/>
  </Navbar>