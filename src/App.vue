<script setup>
import { ref } from 'vue';
import { Transition } from 'vue';
const flag = true;

</script>

<template>
  <main class="container">
    <Transition name="fade">
      <div>
        <router-view></router-view>
      </div>
    </Transition>
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

  .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>