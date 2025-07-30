<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

// получаем ID события из URL
const id = route.params.id
</script>

<template>
  <div>
    <h1>Страница события #{{ id }}</h1>

  </div>
</template>