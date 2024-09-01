<template>
  <div class="page-background">

  </div>
</template>

<script setup>

</script>

<style scoped>
    .page-background {
    /* background-image: url('@/assets/todo.png'); */
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    min-height: 100vh; 
    color: #fff; 
    }
    @media (max-width: 768px) {
  .page-background {
    background-image: none;
  }
}
</style>