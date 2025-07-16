<script setup lang="ts">
import { useAutoAnimate } from "@formkit/auto-animate/vue";

const balls = ref(["red", "green", "blue"]);
const [parent, enable] = useAutoAnimate({ duration: 500 });

let isEnabled = ref(true);
function toggle() {
  isEnabled.value ? enable(false) : enable(true);
  isEnabled.value = !isEnabled.value;
}

onMounted(() => {
  setInterval(() => {
    balls.value.push(balls.value.shift()!);
  }, 600);
});
</script>

<template>
  <UButton @click="toggle">
    {{ isEnabled ? "🚫 Disable" : "✅ Enable" }} animations
  </UButton>
  <ul class="balls" ref="parent">
    <li v-for="color in balls" :key="color" :class="color">
      {{ color }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
.balls {
  aspect-ratio: 1;
  margin: 2em 0;
  width: 200px;
  max-width: 15em;
  position: relative;
  padding: 0;
  background-size: contain;
  background-repeat: none;
  li {
    list-style: none;
  }
  li::before {
    display: none;
    margin-bottom: 0;
  }
  li:first-child {
    position: absolute;
    top: 0;
    left: calc(50% - 2em);
  }
  li:nth-child(2) {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  li:nth-child(3) {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .red {
    background-color: #eb2e1d;
  }
  .blue {
    background-color: #5411ef;
  }
  .green {
    background-color: #4fd726;
  }
}
</style>
