<script setup lang="ts">
const numbers = ref<number[]>(new Array(50).fill("").map((_, i) => i));
const randomize = () => {
  numbers.value.sort(() => (Math.random() > 0.5 ? 1 : -1));
};
const reset = () => {
  numbers.value.sort((a, b) => a - b);
};
</script>

<template>
  <div class="example boxes-example">
    <UButton class="mr-[10px]" @click="randomize">Randomize</UButton>
    <UButton @click="reset">Reset</UButton>
    <div class="boxes" v-auto-animate="{ duration: 500 }">
      <div
        class="box"
        v-for="number in numbers"
        :key="number"
        v-text="number"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.boxes {
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  margin: 2em -0.25em 2em -0.25em;

  .box {
    box-sizing: border-box;
    width: calc(10% - 0.5em);
    margin: 0.25em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875em;
    font-weight: 300;
    aspect-ratio: 1;
    border: 1px solid var(--gray-l);
  }
}
</style>
