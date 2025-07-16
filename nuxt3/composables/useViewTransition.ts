import { useDark, useToggle } from "@vueuse/core";

export function useViewTransition() {
  const isDark = useDark();
  const toggleDark = useToggle(isDark);

  const toggleAppearance = async (e?: MouseEvent) => {
    // 如果没有事件对象（比如通过键盘触发），则使用屏幕中心坐标
    const x = e?.clientX ?? window.innerWidth / 2;
    const y = e?.clientY ?? window.innerHeight / 2;

    const enableTransitions = () =>
      "startViewTransition" in document &&
      window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

    if (!enableTransitions()) {
      toggleDark();
      return;
    }

    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )}px at ${x}px ${y}px)`,
    ];

    await document.startViewTransition(async () => {
      toggleDark();
    }).ready;

    document.documentElement.animate(
      { clipPath: isDark.value ? clipPath.reverse() : clipPath },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: `::view-transition-${
          isDark.value ? "old" : "new"
        }(root)`,
      }
    );
  };

  return { isDark, toggleAppearance };
}
