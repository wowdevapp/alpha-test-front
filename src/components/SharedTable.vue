<script setup lang="js">
import { FlexRender, getCoreRowModel, getFilteredRowModel, useVueTable } from '@tanstack/vue-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { ref } from 'vue'
import { valueUpdater } from '@/lib/utils'
import { Input } from '@/components/ui/input'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  columns: {
    type: Array,
    required: true
  },
  onClickRow: {
    type: Function,
    required: true
  },
  filter: {
    type: Boolean,
    required: true
  }
})
const columnFilters = ref([])

const globalFilter = ref('')

const table = useVueTable({
  get data() {
    return props.data
  },
  get columns() {
    return props.columns
  },
  getCoreRowModel: getCoreRowModel(),
  onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters),
  getFilteredRowModel: getFilteredRowModel(),
  state: {
    get globalFilter() {
      return globalFilter.value
    },
    onGlobalFilterChange: (updaterOrValue) => {
      globalFilter.value =
        typeof updaterOrValue === 'function' ? updaterOrValue(globalFilter.value) : updaterOrValue
    }
  }
})
</script>

<template>
  <div class="flex items-center py-4" v-if="filter">
    <Input
      class="max-w-sm"
      placeholder="Filter by name, username, or email..."
      :modelValue="globalFilter ?? ''"
      @update:modelValue="(value) => (globalFilter = String(value))"
    />
  </div>
  <div class="border rounded-md">
    <Table>
      <TableHeader class="bg-gray-300">
        <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <TableHead v-for="header in headerGroup.headers" :key="header.id">
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-if="table.getRowModel().rows?.length">
          <TableRow
            v-for="row in table.getRowModel().rows"
            :key="row.id"
            :data-state="row.getIsSelected() ? 'selected' : undefined"
            @Click="onClickRow(row)"
          >
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
            </TableCell>
          </TableRow>
        </template>
        <template v-else>
          <TableRow>
            <TableCell :colspan="columns.length" class="h-24 text-center"> No results. </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
  </div>
</template>
