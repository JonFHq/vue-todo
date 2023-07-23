<script setup lang="ts">
import Title from './components/Title.vue'
</script>

<template>
  <header >

    <div >
      <Title msg="Todo List" />
    </div>
  </header>

  <main>
    <div>Hello World!</div>
  </main>
</template>

<style scoped>
header {
  max-width: none;
}

@media (min-width: 1024px) {

  .logo {
    margin: 0 2rem 0 0;
  }

}
</style>
