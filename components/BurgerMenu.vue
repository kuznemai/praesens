<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const email = ref('')

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const subscribe = () => {
  if (email.value) {
    alert(`Подписка оформлена: ${email.value}`)
    email.value = ''
  } else {
    alert('Введите e-mail')
  }
}

const links = [
  'Главная страница',
  'Календарь мероприятий',
  'Субботники МАРС',
  'Журнал для акушеров-гинекологов',
  'Журнал для педиатров',
  'Журнал для неонатологов',
  'Книги',
  'Информационные бюллетени',
  'SPNavigator мобильное приложение для врачей',
  'Медицинский контент',
  'О компании',
  'Контакты'
]
</script>
<template>
  <div class="burger-container">
    <button class="burger-button" @click="toggleMenu">
      ☰
    </button>

    <div class="side-menu" :class="{ open: isOpen }">
      <button class="close-button" @click="toggleMenu">×</button>

      <nav class="nav-links">
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <a href="#">{{ link }}</a>
          </li>
        </ul>
      </nav>

      <div class="subscribe">
        <h4>Подписаться на новости</h4>
        <input type="email" v-model="email" placeholder="Введите Ваш e-mail" />
        <button @click="subscribe">Подписаться</button>
      </div>
    </div>

    <div v-if="isOpen" class="overlay" @click="toggleMenu"></div>
  </div>
</template>
<style scoped>
.burger-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1100;
}

.burger-button {
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  padding: 0.5rem;
}

.side-menu {
  position: fixed;
  top: 0;
  right: -520px;
  width: 480px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  box-sizing: border-box;
  transition: right 0.3s ease;
  z-index: 1200;
}

.side-menu.open {
  right: 0;
}

.close-button {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-links ul {
  list-style: none;
  padding: 0;
}

.nav-links li {
  margin-bottom: 10px;
  padding: 10px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #4d7bae;
}

.subscribe {
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding-top: 12px;
}

.subscribe h4 {
  margin-bottom: 8px;
  font-size: 16px;
}

.subscribe input {
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.subscribe button {
  width: 100%;
  padding: 8px;
  background-color: #4d7bae;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.subscribe button:hover {
  background-color: #3a5f90;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1100;
}
</style>
