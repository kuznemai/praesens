<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TileElement from './TileElement.vue'

interface EventItem {
  id: number
  title: string
  date: string
  location: string
  img: string
  eventType: string
  format: string
}

const events = ref<EventItem[]>([])
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  try {
    const res = await fetch('https://f328fd73119d8afc.mokky.dev/praesensevents')
    const data = await res.json()
    events.value = data
  } catch (e) {
    console.error('Ошибка загрузки данных:', e)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div>
    <div v-if="isLoading">Загрузка...</div>

    <div v-else class="grid-container">
      <TileElement
          v-for="event in events"
          :key="event.id"
          :title="event.title"
          :letters="event.location?.substring(0, 2) || '--'"
          :description="event.format"
          :img="event.img"
          :event-type="event.eventType"
          :date="event.date"
          :format="event.format"
      />
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}


@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>