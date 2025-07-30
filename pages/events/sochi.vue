<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import EventCard from '../components/EventCard.vue'
</script>
<template>
  <Header />
  <main class="container">
    <h1>Мероприятие: Сочи</h1>
    <EventCard
        title="AIG Sochi"
        description="Мероприятие AIG, проходящее в Сочи"
    />
  </main>
  <Footer />
</template>



<style scoped>
.container {
  padding: 2rem;
}
</style>