<script setup lang="js">
import { onMounted } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const id = route.params.postId

//console.log(route.params)

const post = ref(null)
const comments = ref([])

const getPost = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await response.json()
  post.value = data
}

const getComments = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  const data = await response.json()
  comments.value = data
  console.log(data)
}

onMounted(() => {
  getPost(id)
  getComments(id)
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="w-9/12 p-5 bg-white border shadow-md rounded-xl">
      <div class="flex items-center justify-between w-full pb-3 border-b">
        <div class="flex items-center space-x-3">
          <div class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
          <div class="text-lg font-bold text-slate-700">Joe Smith</div>
        </div>
      </div>

      <div class="mt-4 mb-6">
        <div class="mb-3 text-xl font-bold">
          {{ post?.title }}
        </div>
        <div class="text-sm text-neutral-600">
          {{ post?.body }}
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between text-slate-500">
          <div class="flex space-x-4 md:space-x-8">
            <div class="flex items-center transition cursor-pointer hover:text-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-1.5 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span>{{ comments?.length }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
