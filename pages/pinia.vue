<template>
  <div>showNewUserChatEditToolTip1: {{ showNewUserChatEditToolTip1 }}</div>
</template>

<script lang="ts" setup>
import { useCommonStore } from "~/store/common";
const chatHistoryStore = useCommonStore();
const { showNewUserChatEditToolTip1 } = storeToRefs(chatHistoryStore);
</script>

<style lang="scss" scoped></style>
