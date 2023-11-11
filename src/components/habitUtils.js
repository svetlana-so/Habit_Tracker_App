import { computed } from 'vue';
import {
  dailyHabits,
  saveDailyHabitsToLocalStorage,
} from './localStorageUtils';

const createHabit = (selectedCategory, newHabit, selectedDay) => {
  if (selectedCategory && newHabit) {
    const numberOfDaysAhead = 7;
    for (let i = 0; i < numberOfDaysAhead; i += 1) {
      const futureDate = new Date(
        selectedDay.getTime() + i * 24 * 60 * 60 * 1000,
      );
      dailyHabits.value.push({
        txt: newHabit.toUpperCase(),
        category: selectedCategory,
        day: futureDate.toISOString().split('T')[0],
        done: false,
      });
    }
    saveDailyHabitsToLocalStorage(dailyHabits.value);
  } else {
    // fix that with allert
    window.alert('Please select a category and enter a habit.');
  }
};

const updateHabitDoneStatus = (txt, day) => {
  const targetHabit = dailyHabits.value.find(
    h => h.txt === txt && h.day === day,
  );
  if (targetHabit) {
    targetHabit.done = !targetHabit.done;
    saveDailyHabitsToLocalStorage(dailyHabits.value);
  }
};

const completionMessage = computed(() => {
  const habitGroups = dailyHabits.value.reduce((groups, habit) => {
    if (habit.done) {
      groups[habit.txt] = groups[habit.txt] || [];
      groups[habit.txt].push(habit);
    }
    return groups;
  }, {});

  const completedHabit = Object.keys(habitGroups).find(
    text => habitGroups[text].length >= 7,
  );

  return completedHabit
    ? `Congratulations! You've successfully completed the habit '${completedHabit}' for seven days in a row. Keep going!`
    : null;
});

export { createHabit, updateHabitDoneStatus, completionMessage };
