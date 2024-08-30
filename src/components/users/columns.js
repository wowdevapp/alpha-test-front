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
        accessorKey: 'name',
        header: () => h('div', { class: 'text-left' }, 'Name'),
        cell: ({ row }) => {
            const name = row.getValue('name')
            /* const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount) */

            return h('div', { class: 'text-left font-medium' }, name)
        },

    },
    {
        accessorKey: 'username',
        header: () => h('div', { class: 'text-left' }, 'Username'),
        cell: ({ row }) => {
            const username = row.getValue('username')
            /* const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount) */

            return h('div', { class: 'text-left font-medium' }, username)
        },

    },
    {
        accessorKey: 'email',
        header: () => h('div', { class: 'text-left' }, 'Email'),
        cell: ({ row }) => {
            const email = row.getValue('email')
            /* const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount) */

            return h('div', { class: 'text-left font-medium' }, email)
        },

    },
    {
        accessorKey: 'phone',
        header: () => h('div', { class: 'text-left' }, 'Phone'),
        cell: ({ row }) => {
            const phone = row.getValue('phone')
            /* const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount) */

            return h('div', { class: 'text-left font-medium' }, phone)
        },

    },
    {
        accessorKey: 'website',
        header: () => h('div', { class: 'text-left' }, 'Website'),
        cell: ({ row }) => {
            const website = row.getValue('website')
            /* const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount) */

            return h('div', { class: 'text-left font-medium' }, website)
        },

    }
]