<script setup lang="ts">
import Title from './components/Title.vue'
import Todo from './components/Todo/Todo.vue'
</script>

<template>
    <header >
      
      <div >
        <Title msg="Todo List" />
      </div>
    </header>

  <main>
    <Todo />
  </main>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
@media (min-width: 1024px) {

  .logo {
    margin: 0 2rem 0 0;
  }

}
</style>
