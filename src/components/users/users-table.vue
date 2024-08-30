<script setup lang="js">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SharedTable from '../SharedTable.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  columns: {
    type: Array,
    required: true
  }
})

const globalFilter = ref('')

const router = useRouter()

const onClickRow = (row) => {
  router.push('/user/' + row.original.id)
}
</script>

<template>
  <div>
    <SharedTable
      filter="true"
      :globalFilter="globalFilter"
      :columns="props.columns"
      :data="props.data"
      @clickRow="onClickRow"
    />
  </div>
</template>
