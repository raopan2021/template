<script setup>
const items = ref(["React", "Vue", "Svelte", "Angular"]);

function sortAsc() {
  items.value.sort();
}
function sortDesc() {
  items.value.sort().reverse();
}
</script>

<template>
  <div>
    <UButton class="mr-[10px]" @click="sortAsc">Sort A-Z ↑</UButton>
    <UButton @click="sortDesc">Sort Z-A ↓</UButton>
  </div>
  <ul v-auto-animate>
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </ul>
</template>
