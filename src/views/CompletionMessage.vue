<template>
  <div v-if="message" class="completion-message flex flex-col items-center">
    <div class="confetti-container">
      <ConfettiExplosion />
    </div>
    {{ message }}
  </div>
</template>

<script>
import ConfettiExplosion from 'vue-confetti-explosion';

export default {
  components: {
    ConfettiExplosion,
  },
  props: {
    message: {
      type: String,
      default: 'Default Message',
    },
  },
};
</script>
<style>
.confetti-container {
  position: absolute;
  bottom: 50%;
  left: 30%;
}
</style>
