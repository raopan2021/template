/**
 * 滚动到顶部
 */
export default () => {
  if (import.meta.client && typeof window.scrollTo === "function") {
    window.scrollTo(0, 0);
  }
};
