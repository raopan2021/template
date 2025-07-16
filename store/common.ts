import { defineStore } from "pinia";

// 聊天记录
export const useCommonStore = defineStore("common", () => {
  const showNewUserChatEditToolTip1 = ref(true); // 新用户提示 - 不知道从哪开始？我们预设了一些灵感给您。

  return {
    showNewUserChatEditToolTip1,
  };
});
