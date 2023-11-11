import { ref, computed } from 'vue';

function formatDate(date) {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const day = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  return { day, dayOfMonth };
}

const formatDatetoText = dateString => {
  const options = { month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString(
    'en-US',
    options,
  );
  return formattedDate;
};

const today = ref(new Date());
const formattedTodayISO = computed(
  () => today.value.toISOString().split('T')[0],
);
const formattedTodayDay = computed(() =>
  today.value.toLocaleDateString(undefined, { weekday: 'long' }),
);
const formattedTodayMonth = computed(() =>
  today.value.toLocaleDateString(undefined, { month: 'long' }),
);
const formattedTodayDate = computed(() => today.value.getDate());

const isFutureDate = habitDay => {
  const selectedDay = new Date(habitDay);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  return selectedDay > tomorrow;
};
export {
  formatDate,
  formatDatetoText,
  formattedTodayISO,
  formattedTodayDay,
  formattedTodayMonth,
  formattedTodayDate,
  isFutureDate,
};
