<script setup lang="js">
import { ref } from 'vue'
import SharedTable from '../SharedTable.vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  columns: {
    type: Array,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
})
const router = useRouter()

const globalFilter = ref('')

const onClickRow = (row) => {
  router.push(`/user/${props.userId}/post/${row.original.id}`)
}
</script>

<template>
  <div>
    <SharedTable
      :filter="false"
      :globalFilter="globalFilter"
      :columns="props.columns"
      :data="props.data"
      @clickRow="onClickRow"
    />
  </div>
</template>
