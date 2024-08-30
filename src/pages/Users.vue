<script setup lang="js">
import { onMounted, ref } from 'vue'
import { columns } from '@/components/users/columns'
import UsersTable from '@/components/users/users-table.vue'

const data = ref([])

async function getData() {
  // Fetch data from your API here.
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
}

onMounted(async () => {
  data.value = await getData()
})
</script>

<template>
  <div class="container py-10 mx-auto">
    <h1 class="text-xl text-black">All Users</h1>
    <UsersTable :columns="columns" :data="data" />
  </div>
</template>
