import { ref } from 'vue';
export const dailyHabits = ref([]);
export const saveDailyHabitsToLocalStorage = dailyHabits => {
  localStorage.setItem('dailyHabits', JSON.stringify(dailyHabits));
};

export const loadDailyHabitsFromLocalStorage = () => {
  const storedHabits = localStorage.getItem('dailyHabits');
  return storedHabits ? JSON.parse(storedHabits) : [];
};
