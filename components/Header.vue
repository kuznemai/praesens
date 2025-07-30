<script setup lang="ts">
</script>

<template>
  <header class="site-header">
    <div class="site-header__logo__container">
      <img src="../public/images/logo.svg" alt="logo">
    </div>
    <div class="site-header__image__container">
      <img src="../public/images/sochi.jpg" alt="logo">
    </div>
    <div class="site-header__banner">
      <div class="banner-content">
        <p>19-й Общероссийский научно-практический семинар «Репродуктивный потенциал России: версии и контраверсии»</p>
        <p>5–8 сентября 2025 года</p>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  display: flex;
  flex-direction: column;
}

.site-header__logo__container {
  width: 50%;
  padding: 1rem 3rem;
}

.site-header__image__container img{
  width: 100%;
}

.site-header__banner {
  width: 100%;
}

.banner-content {
  color: #fff;
  text-align: center;
  padding: 1rem;
  background-color: #4d7bae;
}

.banner-content h1 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.banner-content p {
  font-size: 1.2rem;
}

/* Адаптивность */
@media (max-width: 768px) {
  .site-header {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .site-header__logo__container {
    grid-column: 1 / 2;
  }

  .site-header__banner {
    grid-column: 1 / 2;
    height: 200px;
  }
}
</style>