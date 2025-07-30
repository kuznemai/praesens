<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import EventCard from '../components/EventCard.vue'
import Perelinks from "~~/components/Perelinks.vue";
import SearchBar from "~~/components/SearchBar.vue";
import Tiles from "~~/components/Tiles.vue";
import BurgerMenu from "~~/components/BurgerMenu.vue";
</script>

<template>
  <div class="layout">
    <burger-menu></burger-menu>
    <div class="content-wrapper">
      <Header class="header" />
      <main class="container">
        <EventCard
            :id="1"
            title="Открыта регистрация на конференцию..."
            day="25.07.2025 • "
        />
        <EventCard
            :id="2"
            title="Школа юридической самообороны врача"
            day="21.07.2025 • "
        />
        <EventCard
            :id="3"
            title="Открыта регистрация на 18-ю Всероссийскую научно-практическую конференцию «Главврач ХХI века», г. Сочи"
            day="25.07.2025 • "
        />
        <EventCard
            :id="4"
            title="Открыта регистрация на «Школу юридической самообороны врача», 5–8 сентября 2025 года, Сочи"
            day="21.07.2025 • "
        />
        <a href="#" class="all-news-link">Все новости <span class="arrow">→</span></a>
      </main>
    </div>
    <perelinks></perelinks>
    <search-bar></search-bar>
    <tiles></tiles>
  </div>
  <Footer class="footer" />
</template>

<style scoped>
.layout {
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  max-width: 1138px;
  margin: 0 auto;
}

.header {
  width: 50%;
  background-color: #f4f4f4;
  padding: 1rem 0;
  box-sizing: border-box;
}

.content-wrapper {
  display: flex;
  flex-direction: row;


  box-sizing: border-box;
  gap: 30px;

}

.container {
  width: 50%;
  padding: 0;
}

.footer {
  flex: 0 0 100%;
  padding: 1rem;
  background-color: #f4f4f4;
  text-align: center;
  font-size: 0.875rem;
  color: #555;
}

.all-news-link {
  display: inline-flex;
  align-items: center;
  font-size: 1.3rem;
  color: #4d7bae;
  text-decoration: none;
  margin-top: 1rem;
  padding: 0.5rem;
  transition: color 0.3s ease;
}

.arrow {
  margin-left: 0.5rem;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .layout {
    flex-direction: column;
  }

  .header,
  .content-wrapper {
    flex: 0 0 100%;
    min-height: auto;
  }

  .container {
    width: 100%;
  }
}
</style>