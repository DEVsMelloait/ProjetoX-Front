<script>
  import "../app.postcss";
  import Header from "$lib/Componentes/Organismos/Header.svelte";
  import Footer from "$lib/Componentes/Organismos/Footer.svelte";
</script>

<section>
  <body
    class="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700 px-2 sm:px-4 py-2.5 w-full"
  >
    <Header />
    <div id="page-container">
      <div id="content-wrap">
        <slot />
      </div>
      <footer  >
        <Footer />
      </footer>
    </div>
  </body>
</section>

<style>
  footer {
    position: absolute;
  bottom: 0;
  width: 100%;
  height: 180px;     /* altura do rodapé */
  }
  #page-container {
  position: relative;
  min-height: 615px;
}

#content-wrap {
  padding-bottom: 180px;   /* altura do rodapé */
}
</style>
