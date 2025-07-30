// stores/events.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useFetch } from '#app' // из Nuxt, не из 'nuxt-composition-api'

export const useEventsStore = defineStore('events', () => {
    const events = ref([])
    const isLoading = ref(false)

    const fetchEvents = async () => {
        isLoading.value = true
        try {
            const { data } = await useFetch('/api/events')
            events.value = data.value || []
        } catch (e) {
            console.error('Ошибка загрузки событий:', e)
        } finally {
            isLoading.value = false
        }
    }

    return {
        events,
        isLoading,
        fetchEvents,
    }
})
