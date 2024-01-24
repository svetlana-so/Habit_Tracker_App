<script setup>
import { ref, computed, onMounted } from 'vue';
import {
  formatDate
} from '../stores/dateUtils.js';
import {
  loadDailyHabitsFromLocalStorage,
  dailyHabits,
} from '../stores/localStorageUtils.js';
import { createHabit } from '../stores/habitUtils.js';
import AddButton from '../components/AddButton.vue'
import Header from '../components/Header.vue'

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
      <button class="focus:outline-none text-white bg-teal-700 hover:bg-teal-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-m px-5 py-2.5 mb-2" @click="handleCreateHabit">Create a Habit</button>
      <button class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-m px-5 py-2.5 mb-2"  @click="showModal = false">Close</button>
    </div>
  </div>

<Header />
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
        class="flex flex-wrap bg-zinc-400 bg-opacity-25 justify-center text-center rounded-full w-20"
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
    <AddButton v-if="selectedDay" @click="showModal = true"/>
  </main>
</template>

<style scoped>

.selected-day {
  background-color: #24579a;
  color: white;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 77%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: auto;
  background-color: #2c68b5;
  border-radius: 15px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
}

.modal button {
  padding: 10px;
  cursor: pointer;
  border: 1px solid;
}

</style>
