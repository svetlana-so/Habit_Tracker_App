<template>
  <div v-if="message" class="completion-message flex flex-col items-center">
    <div class="confetti-container">
      <ConfettiExplosion />
    </div>
    {{ message }}
    <!-- <button class="closeMsgBtn" @click="closeCompletionMessage">Close</button> -->
    
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
.closeMsgBtn {
  background-color: grey;
  padding: 5px;
  width: 150px;
  border-radius: 15px;
}
</style>
