<script setup>
import { computed, defineProps} from 'vue';
import {
  saveDailyHabitsToLocalStorage,
  dailyHabits,
} from '../stores/localStorageUtils.js';
import { formatDatetoText, isFutureDate } from '../stores/dateUtils.js';
import { renderCategoryIcon } from '../stores/iconsCategory.js';
import {updateHabitDoneStatus, completionMessage} from '../stores/habitUtils.js'
import CompletionMessage from './CompletionMessage.vue'; 

const props = defineProps(['day']);

const habitsForSelectedDay = computed(() => {
  return dailyHabits.value.filter(habit => habit.day === props.day);
});

const removeHabit = habit => {
  dailyHabits.value = dailyHabits.value.filter(h => h.txt !== habit.txt);
  saveDailyHabitsToLocalStorage(dailyHabits.value);
};

const doneHabitsPercentage = computed(() => {
  if (!Array.isArray(habitsForSelectedDay.value)) {
    return 0;
  }
  if (habitsForSelectedDay.value.length === 0) {
    return 0;
  }
  const doneHabitsCount = habitsForSelectedDay.value.filter(
    habit => habit.done
  ).length;
  return ((doneHabitsCount / habitsForSelectedDay.value.length) * 100).toFixed(0);
});
</script>

<template>
  <div>
    <h1 class="m-8 text-center text-2xl text-zinc-400">
      Yor habits for {{ formatDatetoText(props.day) }}
    </h1>
    <div class="m-6 text-base font-medium dark:text-white">
      Your progress for today is {{ doneHabitsPercentage }}%
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5 m-6 dark:bg-gray-700">
      <div
        class="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300"
        :style="{ width: doneHabitsPercentage + '%' }"
      ></div>
    </div>
    <completion-message :message="completionMessage" class="animate-pulse m-8 text-center text-2xl text-teal-400"></completion-message>
    <div class="habitsCard flex justify-center">
      <ul>
        <li
          v-for="habit in habitsForSelectedDay"
          :key="habit.id"
          class="card m-4 p-2 space-x-12 flex justify-between"
        >
          <div class="flex items-center ml-4">
            <input
              id="teal-checkbox"
              type="checkbox"
              :checked="habit.done"
              @change="updateHabitDoneStatus(habit.txt, habit.day)"
              :disabled="isFutureDate(habit.day)"
              class="w-6 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="teal-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            ></label>
          </div>
          <span
            v-html="renderCategoryIcon(habit.category)"
            class="centered-span"
          ></span>
          <div class="text-xl md:text-2xl text-zinc-400">
            {{ habit.txt }}
          </div>
          <button
            @click="removeHabit(habit)"
            type="button"
            class="text-xl md:text-2xl text-zinc-400"
          >
            X
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.card {
  background-color: rgba(93, 89, 89, 0.502);
  border-radius: 15px;
}
.centered-span {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
../stores/localStorageUtils.js../stores/dateUtils.js../stores/iconsCategory.js../stores/habitUtils.js