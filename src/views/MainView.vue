<script setup>
import { ref, computed, onMounted } from 'vue';
import {
  formatDate,
  formattedTodayISO,
  formattedTodayDay,
  formattedTodayMonth,
  formattedTodayDate,
} from '../components/dateUtils.js';
import {
  loadDailyHabitsFromLocalStorage,
  dailyHabits,
} from '../components/localStorageUtils.js';
import { createHabit } from '../components/habitUtils.js';

const selectedDate = ref(new Date());
const showModal = ref(false);
const selectedCategory = ref('');
const newHabit = ref('');
const selectedDay = ref(null);

const handleCreateHabit = () => {
  createHabit(
    selectedCategory.value,
    newHabit.value,
    selectedDay.value,
    showModal,
    selectedCategory
  );
  showModal.value = false;
  newHabit.value = '';
  selectedCategory.value = '';
};
onMounted(() => {
  dailyHabits.value = loadDailyHabitsFromLocalStorage();
});

const previousDay = () => {
  selectedDate.value = new Date(selectedDate.value.getTime() - 86400000);
};

const nextDay = () => {
  selectedDate.value = new Date(selectedDate.value.getTime() + 86400000);
};

const dateRange = computed(() => {
  const range = [];
  for (let i = -3; i <= 3; i++) {
    const date = new Date(selectedDate.value);
    date.setDate(selectedDate.value.getDate() + i);
    range.push(date);
  }
  return range;
});
const toggleDaySelection = day => {
  selectedDay.value = day;
};
</script>

<template>
  <div v-if="showModal" class="overlay">
    <div class="modal">
      <select v-model="selectedCategory" class="pl-2">
        <option disabled value="">Please select a categoty</option>
        <option>Health and Fitness</option>
        <option>Productivity</option>
        <option>Personal Development</option>
        <option>Financial</option>
        <option>Relationships</option>
        <option>Creativity</option>
        <option>Organization</option>
        <option>Hobbies</option>
        <option>Education</option>
        <option>Mindset</option>
        <option>Other</option>
      </select>
      <input
        class="pl-2"
        v-model="newHabit"
        type="text"
        placeholder="Enter a new habit"
        @keyup.enter="handleCreateHabit"
      />
      <button class="createbtn" @click="handleCreateHabit">Create a Habit</button>
      <button class="closebtn" @click="showModal = false">Close</button>
    </div>
  </div>

  <header class="mx-auto px-14 mt-6" id="upperDisplay">
    <h2 class="text-2xl md:text-6xl text-white-400 m-4 neon-text-shadow">
      Welcome to Habit Tracker App
    </h2>
    <h1 class="text-2xl md:text-4xl text-zinc-400 neon-text-shadow">
      Develop Grit, Forge Your Habits: The Path to Unwavering Success.
    </h1>
    <time :datetime="formattedTodayISO" class="icon animated-date">
      <em>{{ formattedTodayDay }}</em>
      <strong>{{ formattedTodayMonth }}</strong>
      <span>{{ formattedTodayDate }}</span>
    </time>
  </header>
  <main class="m-10">
    <h1 class="animate-pulse text-center m-6 text-teal-400">
      Please select a day
    </h1>
    <div class="grid grid-cols-3 justify-center gap-2 md:flex">
      <button @click="previousDay">
        <i
          class="fa-solid fa-circle-arrow-left fa-beat-fade fa-2xl"
          style="color: #24579a"
        ></i>
      </button>
      <div
        v-for="(day, index) in dateRange"
        :key="index"
        class="date-box"
        :class="{ 'selected-day': day === selectedDay }"
        @click="toggleDaySelection(day)"
      >
        <router-link :to="'/day/' + day.toISOString().split('T')[0]">
          <div class="day">{{ formatDate(day).day }}</div>
          <div class="dayOfMonth">{{ day.getDate() }}</div>
        </router-link>
      </div>
      <button @click="nextDay">
        <i
          class="fa-solid fa-circle-arrow-right fa-beat-fade fa-2xl"
          style="color: #24579a"
        ></i>
      </button>
    </div>
    <router-view></router-view>
    <div class="addbtn">
      <button class="add" @click="showModal = true">+</button>
    </div>
  </main>
</template>

<style scoped>
.date-box {
  background-color: rgba(93, 89, 89, 0.502);
  text-align: center;
  padding: 20px;
  border-radius: 40% 40%;
  color: rgb(173, 172, 171);
}
.selected-day {
  background-color: #24579a;
  color: white;
  border-radius: 20%;
}
#upperDisplay {
  max-width: 90%;
  height: 70vh;
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
.add {
  border: none;
  padding: 10px;
  width: 70px;
  height: 70px;
  cursor: pointer;
  background-color: #24579a;
  border-radius: 100%;
  color: rgb(255, 255, 255);
  font-size: 30px;
}
.addbtn {
  display: flex;
  justify-content: center;
  margin: 50px;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* for the addCard */

.modal {
  width: 550px;
  background-color: #24579a;
  border-radius: 55px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.modal button {
  padding: 10px;
  cursor: pointer;
  border: 1px solid;
}

.neon-text-shadow {
  text-shadow:
    0 0 10px rgba(36, 87, 153, 0.8),
    0 0 20px rgba(36, 87, 153, 0.8),
    0 0 30px rgba(36, 87, 153, 0.8),
    0 0 40px rgba(68, 68, 101, 0.8);
}
time.icon {
  font-size: 16px;
  display: block;
  position: relative;
  width: 7em;
  height: 7em;
  background-color: #978d8daa;
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
  color: #3f3e3c;
}
time.icon strong {
  position: absolute;
  top: 0;
  padding: 0.4em 0;
  color: #292928;
  background-color: #193861a4;
}
time.icon span {
  font-size: 50px;
  padding-top: 30px;
  color: #24579ac8;
  text-shadow:
    0 0 10px rgba(76, 112, 158, 0.8),
    0 0 20px rgba(54, 65, 79, 0.8),
    0 0 30px rgba(76, 89, 107, 0.8);
}
/* animate the calender */
@keyframes floatUp {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
.animated-date {
  animation: floatUp 2s ease infinite;
}
.closebtn {
  background-color: rgb(157, 44, 44);
  border-radius: 25px ;
}
.createbtn {
  background-color: teal;
  border-radius: 25px ;
}
</style>
