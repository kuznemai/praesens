<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  id: number
  title: string
  day: string
}>()

const isExpanded = ref(false)
const toggle = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <ul class="event-card">
    <li class="event-card__item">
      <NuxtLink :to="`/events/${id}`" class="event-title">
        <p class="event-title-text">{{ title }}</p>
        <p class="event-description">{{ day }}</p>
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.event-card {
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
  background-color: #fff;
  transition: background-color 0.3s ease;
  list-style-type: none;
  cursor: pointer;
}

.event-card:hover {
  background-color: #e8e8e8;
}

.event-title {
  text-decoration: none;
  display: block;
}

.event-title-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
  color: #4c4c4c;
}

.event-description {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

.event-full {
  margin-top: 10px;
  font-size: 0.95rem;
  color: #333;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
