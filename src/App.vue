<template>
  <main>
    <header>
      <img src="./assets/cargofive.png" alt="cargofive" />
      <h1>Hiring Test - Frontend</h1>
    </header>
    <ListarPuertos />
  </main>
</template>

<script>
  import ListarPuertos from "./components/ListarPuertos.vue";

  export default {
    name: "App",
    components: {
      ListarPuertos,
    },
  };
</script>
