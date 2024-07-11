<script>
export default {
  data() {
    return {
      name: 'Anna Marie',
      status: 'active',
      tasks: ['task1', 'task2', 'task3'],
      link: 'google.com'
    }
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'noactive'
      } else if (this.status === 'inactive') {
        this.status = 'active'
      } else {
        this.status = 'pending'
      }
    }
  }
}
</script>
<template>
  <h3>{{ name }}</h3>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">pending</p>
  <p v-else-if="status === 'noactive'">No active</p>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a :href="link">Click me</a>

  <button @click="toggleStatus">Change status</button>
</template>

<style scoped>
h3 {
  color: red;
  font-size: 25px; /* Changed 'size' to 'font-size' for correct CSS syntax */
  font-weight: bold;
}
</style>
