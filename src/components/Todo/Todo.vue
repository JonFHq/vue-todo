<script lang="ts">
import List from './List.vue';
export default {
    name: 'Todo',
    data() {
        const items: string[] = [];
        const task = '';
        return {
            items,
            task,
            editTaskNumber: -1
        }
    },
    methods: {
        submit(e: any) {
            e.preventDefault();
            if (this.editTaskNumber >= 0) {
                this.items[this.editTaskNumber] = this.task;
                this.editTaskNumber = -1;
            } else {
                this.items.push(this.task);
            }
            this.task = '';
        },
        deleteTask(index: number) {
            this.items.splice(index, 1);
        },
        editTask(index: number) {
            this.editTaskNumber = index;
            this.task = this.items[index];
        },
        cancel() {
            this.editTaskNumber = -1;
            this.task = '';
        }
    },
    computed: {
        taskButton() {
            return this.editTaskNumber >= 0 ? 'Edit' : 'Submit';
        },
        isDisabled() {
            return this.task.length === 0;
        }
    }
}
</script>

<template>
    <div class="container">
        <form v-on:submit="submit">
            <input type="text" v-model="task" placeholder="Enter your todo" />
            <div>
                <button :disabled="task == ''" type="submit">{{ taskButton }}</button>
                <button :disabled="task == ''" type="reset" v-on:click="cancel" >Cancel</button>
            </div>
        </form>
        <todo-list v-bind:items="items" v-on:deleteTask="deleteTask" v-on:editTask="editTask" />
    </div>
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

input {
    margin-bottom: 1rem;
}

.taskButton.edit {
    background-color: green;
}

.taskButton.delete {
    background-color: red;
}
</style>
