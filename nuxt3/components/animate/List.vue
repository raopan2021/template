<script setup lang="ts">
const items = ref(["🍎 Apple", "🍌 Banana", "🍒 Cherry"]);

const fruitBasket = [
  "🍓 Strawberry",
  "🥥 Coconut",
  "🥝 Kiwi",
  "🍇 Grape",
  "🍉 Watermelon",
  "🍍 Pineapple",
  "🍐 Pear",
  "🍑 Peach",
  "🫐 Blueberry",
  "🍊 Orange",
  "🥭 Mango",
];

const remove = (item: string) => {
  items.value = items.value.filter((fruit) => {
    if (fruit === item) {
      fruitBasket.push(fruit);
      return false;
    }
    return true;
  });
};

const add = () => {
  if (fruitBasket.length) {
    items.value.splice(
      Math.round(Math.random() * items.value.length - 1),
      0,
      fruitBasket?.shift()! // 使用非空断言
    );
  } else {
    alert("Out of fruit!");
  }
};

const randomize = () => {
  items.value.sort(() => (Math.random() > 0.5 ? 1 : -1));
};

// 按英文名称排序
const sortByName = () => {
  items.value.sort((a, b) => {
    // 提取英文部分（去掉emoji和空格）
    const nameA = a.replace(/^[^\w]*\s*/g, "").toLowerCase();
    const nameB = b.replace(/^[^\w]*\s*/g, "").toLowerCase();
    return nameA.localeCompare(nameB);
  });
};
</script>

<template>
  <div class="example list-example">
    <UButton class="mr-[10px]" @click="add">+ Add Fruit</UButton>
    <UButton class="mr-[10px]" @click="randomize">Randomize</UButton>
    <UButton @click="sortByName">SortByName</UButton>

    <ul v-auto-animate>
      <li v-for="item in items" :key="item">
        <span>{{ item }}</span>
        <UButton @click.prevent="remove(item)" aria-label="Remove Fruit">
          x
        </UButton>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  max-width: 300px;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 0.75em;
  margin-bottom: 0.5em;
  border-radius: 0.5em;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.1);
  font-size: 0.875em;
}
[data-dark-mode="true"] li {
  background-color: var(--purple-md);
}

li::before {
  display: none;
}

li button {
  appearance: none;
  border: none;
  padding: none;
  margin: none;
  display: flex;
  align-items: center;
  cursor: pointer;
}

li button svg {
  width: 1.2em;
  fill: red;
}
[data-dark-mode="true"] li button svg {
  fill: rgb(244, 67, 67);
}
</style>
