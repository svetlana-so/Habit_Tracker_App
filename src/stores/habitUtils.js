import {
  dailyHabits,
  saveDailyHabitsToLocalStorage,
} from "./localStorageUtils.js";
import { computed } from "vue";

const createHabit = (selectedCategory, newHabit, selectedDay) => {
  if (selectedCategory && newHabit) {
    const numberOfDaysAhead = 7;
    for (let i = 0; i < numberOfDaysAhead; i++) {
      const futureDate = new Date(
        selectedDay.getTime() + i * 24 * 60 * 60 * 1000
      );
      dailyHabits.value.push({
        txt: newHabit.toUpperCase(),
        category: selectedCategory,
        day: futureDate.toISOString().split("T")[0],
        done: false,
      });
    }
    saveDailyHabitsToLocalStorage(dailyHabits.value);
  } else {
    window.alert("Please select a category and enter a habit.");
  }
};

const updateHabitDoneStatus = (txt, day) => {
  const targetHabit = dailyHabits.value.find(
    (h) => h.txt === txt && h.day === day
  );
  if (targetHabit) {
    targetHabit.done = !targetHabit.done;
    saveDailyHabitsToLocalStorage(dailyHabits.value);
  }
};

const deleteCompletedHabits = (completedHabitText) => {
  dailyHabits.value = dailyHabits.value.filter(
    (habit) => !(habit.done && habit.txt === completedHabitText)
  );
  saveDailyHabitsToLocalStorage(dailyHabits.value);
};

const completionMessage = computed(() => {
  const habitGroups = {};

  for (const habit of dailyHabits.value) {
    if (habit.done) {
      if (!habitGroups[habit.txt]) {
        habitGroups[habit.txt] = [];
      }
      habitGroups[habit.txt].push(habit);
    }
  }

  for (const text in habitGroups) {
    if (habitGroups[text].length >= 7) {
      setTimeout(() => {
        deleteCompletedHabits(text);
      }, 10000);

      return `Congratulations! You've successfully completed the habit '${text}' for seven days in a row. Keep going! The habit will be delited in 10 seconds.`;
    }
  }

  return null;
});
export { createHabit, updateHabitDoneStatus, completionMessage };
