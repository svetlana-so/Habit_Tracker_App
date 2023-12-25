<script setup>
import {
  formatDate,
  formattedTodayISO,
  formattedTodayDay,
  formattedTodayMonth,
  formattedTodayDate,
} from '../stores/dateUtils.js';
</script>

<template>
<header class="mx-auto px-10 mt-6" id="upperDisplay">
    <h2 class="text-xl md:text-4xl text-white m-4 neon-text-shadow">
      Welcome to Habit Tracking App
    </h2>
    <time :datetime="formattedTodayISO" class="icon animated-date">
      <em>{{ formattedTodayDay }}</em>
      <strong>{{ formattedTodayMonth }}</strong>
      <span>{{ formattedTodayDate }}</span>
    </time>
    <h1 class="text-l md:text-2xl text-white text-center">
      Develop Grit, Forge Your Habits: The Path to Unwavering Success.
    </h1>
  </header>
</template>

<style scoped>
#upperDisplay {
    max-width: 90%;
    height: 50vh;
    background-image: url('../assets/bgr.jpeg');
    background-size: cover;
    background-position: center;
    border-radius: 55px;
    color: #fcfbff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
  }

  .neon-text-shadow {
  text-shadow:
    0 0 10px rgba(17, 55, 105, 0.8),
    0 0 20px rgba(36, 87, 153, 0.8),
    0 0 30px rgba(36, 87, 153, 0.8),
    0 0 40px rgba(197, 197, 205, 0.8);
}
time.icon {
  font-size: 16px;
  display: block;
  position: relative;
  width: 7em;
  height: 7em;
  background-color: #aca6a6cd;
  border-radius: 0.6em;
  overflow: hidden;
}
time.icon * {
  display: block;
  width: 100%;
  font-size: 16px;
  font-style: normal;
  text-align: center;
}
time.icon em {
  position: absolute;
  bottom: 0.1em;
  color: #000000;
}
time.icon strong {
  position: absolute;
  top: 0;
  padding: 0.4em 0;
  color: #070707;
  background-color: #4a6589a4;
}
time.icon span {
  font-size: 50px;
  padding-top: 30px;
  color: #e1e2e3c8;
  text-shadow:
    0 0 10px rgba(187, 202, 222, 0.8),
    0 0 20px rgba(151, 184, 228, 0.8),
    0 0 30px rgba(76, 89, 107, 0.8);
} 

</style> 