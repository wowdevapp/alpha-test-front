import { h } from 'vue'

export const columns = [
    {
        accessorKey: 'id',
        header: () => h('div', { class: 'text-left' }, 'Id'),
        cell: ({ row }) => {
            const id = row.getValue('id')
            /* const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount) */

            return h('div', { class: 'text-left font-medium' }, id)
        },

    },
    {
        accessorKey: 'title',
        header: () => h('div', { class: 'text-left' }, 'Title'),
        cell: ({ row }) => {
            const title = row.getValue('title')
            /* const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount) */

            return h('div', { class: 'text-left font-medium' }, title)
        },

    },
    {
        accessorKey: 'body',
        header: () => h('div', { class: 'text-left' }, 'Body'),
        cell: ({ row }) => {
            const body = row.getValue('body')
            /* const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount) */

            return h('div', { class: 'text-left font-medium' }, body)
        },

    }
]