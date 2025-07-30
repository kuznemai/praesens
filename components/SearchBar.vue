<script setup lang="ts">
</script>

<template>
  <div class="header-search-field">
    <div class="useless-block big"><span>sp</span></div>
    <div class="search-form-wrapper">
      <form action="/search/" class="search-form">
        <input name="query" type="text" class="input-search" placeholder="Что вы хотите найти в StatusPraesens?" value="">
        <button type="submit" class="search-submit">Найти</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.header-search-field {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 58px;
  width: 100vw; /* Full screen width */
  box-sizing: border-box;
  gap: 10px;
}

.search-form-wrapper {
  flex: 1; /* Takes remaining width after useless-block */
  height: 100%;
}

.search-form {
  height: 100%;
  width: 100%;
  border: 2px solid #a1211e; /* Border with specified color */
  border-radius: 4px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.useless-block.big {
  width: 58px;
  height: 58px;
}

.useless-block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 3px;
  background-color: #a1211e;
  color: #ffffff;
  text-transform: uppercase;
}

.search-submit {
  min-width: 140px;
  background-color: #a1211e;
  color: #ffffff;
  border: none; /* Ensure no additional border on button */
  height: 100%;
  cursor: pointer;
  font-size: 1rem;
}

.input-search {
  flex: 1; /* Input takes remaining space in form */
  height: 100%;
  border: none; /* Remove default input border */
  padding: 0 1rem;
  box-sizing: border-box;
}
.input-search:focus {
  outline: none; /* Remove default browser focus outline */
  border: none; /* Ensure border doesn't change on focus */
}
</style>