<script lang="ts">

export default {
    name: 'List',
    props: {
        items: Array<string>,
        deleteTask: Function,
        editTask: Function
    },
    methods: {
        deleteTask(index: number) {
            this.$emit('deleteTask', index);
        },
        editTask(index: number) {
            this.$emit('editTask', index);
        }
    }
}
</script>
<template>
    <ul>
        <li v-for="item in items">
            <span>{{ item }}</span>
            <div>
                <button class="taskButton edit" v-on:click="editTask(items.indexOf(item));">Edit</button>
                <button class="taskButton delete" v-on:click="deleteTask(items.indexOf(item));">Delete</button>
            </div>
        </li>
    </ul>
</template>
<style scoped>
li {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.taskButton.edit {
    background-color: green;
    color: white;
    border-radius: 5px;
}

.taskButton.delete {
    background-color: red;
    color: white;
    border-radius: 5px;
}
</style>