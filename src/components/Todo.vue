<script lang="ts">

export default {
    data() {
        return {
            items: [],
            tarea: '', 

        }
    }
}

</script>

<template>
    <div class="container">

        <div >
            <input v-model="tarea" placeholder="Introduzca una tarea para hacer" autofocus>
            <button @click="items.push(tarea)">Agregar</button>
        </div>
        <ul>
            <h1><li v-for="item in items">{{ item }}</li></h1>
        </ul>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 100%;
}

.container h1 {
    font-weight: 500;
    font-size: 2.6rem;
}
</style>
