<template>
  <div v-if="message" class="completion-message flex flex-col items-center">
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

.close-msg-btn {
  background-color: grey;
  padding: 5px;
  width: 150px;
  border-radius: 15px;
}
</style>
