<script setup lang="ts">
defineProps<{
  title: string
  letters: string
  description: string
  img: string
  eventType: string
  date: string
  format: string
}>()


</script>

<template>
  <div class="tile">
    <div class="tile__header-wrapper">
      <div class="tile__header">
        <h2 class="tile__title">{{ title }}</h2>
        <p class="tile__event-type">{{ eventType }}</p>
      </div>
      <div class="tile__letters">
        <div class="tile__letter">{{ letters.charAt(0) }}</div>
        <div class="tile__letter">{{ letters.charAt(1) }}</div>
      </div>
    </div>
    <div class="tile__image">
      <img :src="img" alt="Tile image" />
      <div class="tile__description">
        <p>{{ description }}</p>
        <p>{{ date }}</p>
      </div>
    </div>
    <div class="tile__format">{{ format }}</div>
  </div>
</template>


<style scoped>
.tile {
  width: 100%;
  max-width: 400px;
  padding: 8px;
  overflow: hidden;
}

.tile__header-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  gap: 20px;
}

.tile__header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  color: #333;
}

.tile__title {
  font-size: 1rem;
  margin: 0;
}

.tile__event-type {
  font-size: 0.9rem;
}

.tile__letters {
  display: flex;
  gap: 0.2rem;
}

.tile__letter {
  width: 40px;
  height: 40px;
  background-color: #a1211e;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.2rem;
}

.tile__image {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.tile__image img {
  width: 100%;
  display: block;
}

.tile__description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: rgba(77, 123, 174, 0.9);
  color: #fff;
  text-align: left;
}

.tile__description p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}

.tile__format {
  display: inline-block;
  background-color: #a1211e;
  border-radius: 0.2rem;
  color: #ffffff;
  font-size: 0.9rem;
  padding: 3px;
  margin-top: 0.5rem;
}
</style>