<script setup lang="js">
import { computed, onMounted, ref } from 'vue'
import { columns } from '@/components/posts/columns'
import PostsTable from '@/components/posts/posts-table.vue'
import { useRoute } from 'vue-router'

const data = ref([])

async function getData(userId) {
  // Fetch data from your API here.
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}/posts`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
}

const route = useRoute()

const userId = computed(() => route.params.id)

onMounted(async () => {
  data.value = await getData(userId)
})
</script>

<template>
  <div class="container py-10 mx-auto">
    <h1 class="my-2 text-xl text-black">User Posts</h1>
    <PostsTable :columns="columns" :data="data" :userId="userId" />
  </div>
</template>
