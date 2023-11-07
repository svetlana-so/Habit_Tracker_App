<template>
  <div v-if="message" class="completion-message">
    <div class="confetti-container">
      <ConfettiExplosion />
    </div>
    {{ message }}
  </div>
</template>

<script>
import ConfettiExplosion from "vue-confetti-explosion";

export default {
  components: {
    ConfettiExplosion,
  },
  props: {
    message: String,
  },
};
</script>
<style>
.confetti-container {
  position: absolute;
  bottom: 250px;
  left: 250px;
}
</style>
