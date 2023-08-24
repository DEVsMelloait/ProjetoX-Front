<script>
  import "../app.postcss";
  import Header from "$lib/Componentes/Organismos/Header.svelte";
  import Footer from "$lib/Componentes/Organismos/Footer.svelte";
</script>
<section>

  <Header/>
  <body class="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700 px-2 sm:px-4 py-2.5 w-full" >
    <slot />
  </body>

  <footer>
    <Footer/>
  </footer>
</section>


<style>
 
  footer{ 
width: 100%;
height: 190px;
position: fixed;
    bottom:0;
    left:0;
}
</style>