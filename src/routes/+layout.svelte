<script>
  import "../app.postcss";
  import Header from "$lib/Componentes/Organismos/Header.svelte";
</script>
<section>

  <Header/>
  <body>
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