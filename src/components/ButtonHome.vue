<script setup>
defineProps({
  route: String,
  icon: String
});
</script>

<template>
    <div class="justify-content-center">
        <router-link :to="`/${route}`">
          <img :src="`../src/assets/${icon}`" class="icono-card mt-1"/>
          <p>{{ route }}</p>
        </router-link>
    </div>
</template>

<style scoped>
  div{
      /* padding: 1rem; */
      width:4.5rem;
      height: 4.5rem;
      background-color: #73a812;
      border-radius: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
  }

  div:hover{
      padding: 1rem;
      width:4rem;
      height: 4rem;
      background-color: #5d880d;
      border-radius: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
  }

  router-link {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a{
      text-decoration: none;
      color: white;
  }

  .icono-card {
    width: 55%;
  }

  p {
    margin: 0;
  }
</style>
