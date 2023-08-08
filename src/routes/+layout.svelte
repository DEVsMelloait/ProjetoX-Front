<script>
  import "../app.postcss";
  import Header from "$lib/Componentes/Organismos/Header.svelte";
</script>
<section>

  <Header/>
  <body class="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700 px-2 sm:px-4 py-2.5 w-full" >
    <slot />
  </body>
<footer>
</footer>
  
</section>


<style>
 
  footer{ 
width: 100%;
height: 100px;
position: absolute;
bottom: 0;
left: 0;
}
</style>