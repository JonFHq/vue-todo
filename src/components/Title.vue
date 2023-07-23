<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.svg" width="125" height="125" />
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.container h1 {
  font-weight: 500;
  font-size: 2.6rem;
  padding: 1rem 0 0 1rem;
}
</style>
