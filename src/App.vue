<script setup>
import { ref } from 'vue';
const flag = true;

</script>

<template>

  <div class="container">
      
    <main>
        <router-view></router-view>
    </main>

  </div>

</template>

<style scoped>
  .container{
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
  }

  main{
    grid-row: 2;
  }
</style>