<script setup lang="ts">
defineProps<{
  title: string
  day: string
}>()
</script>

<template>
  <ul class="event-card">
    <li class="event-card__item">
      <a class="event-title" href="#">
        <p class="event-title-text">{{ title }}</p>
        <p class="event-description">{{ day }}</p>
      </a>
      <slot />
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
}

.event-card:hover {
  background-color: #e8e8e8; /* Gray background on hover */
}

.event-title {
  text-decoration: none; /* Remove default underline from link */
  display: block; /* Ensure the link takes full width for hover */
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
  margin: 0; /* Remove default margin for cleaner spacing */
}
</style>