<template>
  <h3>{{ name }}</h3>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">Pending</p>
  <p v-else-if="status === 'noactive'">No active</p>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>
  <a href="#">Click me</a>
  <button @click="toggleStatus">Change status</button>
  <br />
  <form @submit.prevent="addTask">
    <label for="newTask">New Task</label>
    <input type="text" id="newTask" v-model="newTask" name="newTask" />
    <button type="submit">Click me</button>
  </form>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {
    const name = ref('John Doe')
    const status = ref('active')
    const tasks = ref(['task1', 'task2', 'task3'])
    const newTask = ref('')

    const toggleStatus = () => {
      if (status.value === 'active') {
        status.value = 'noactive'
      } else if (status.value === 'noactive') {
        status.value = 'pending'
      } else {
        status.value = 'active'
      }
    }

    const addTask = () => {
      if (newTask.value.trim() !== '') {
        tasks.value.push(newTask.value)
        newTask.value = ''
      }
    }
    const deleteTask = (index) => {
      tasks.value.splice(index, 1)
    }
    onMounted(async () => {
      try {
        const response = await fetch('http://localhost:8000/api/tasks')
        const data = await response.json()
        console.log(data.data)
        tasks.value = data.data.map((task) => task.title)
      } catch (error) {
        console.log(error)
      }
    })

    return {
      name,
      status,
      tasks,
      toggleStatus,
      newTask,
      addTask,
      deleteTask
    }
  }
}
</script>

<style scoped>
h3 {
  color: red;
  font-size: 25px;
  font-weight: bold;
}
</style>
