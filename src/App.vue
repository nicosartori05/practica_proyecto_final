<script setup>
import { ref } from 'vue';
const flag = true;

</script>

<template>

  
      
    <main class="container">
        <router-view></router-view>
    </main>

  

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