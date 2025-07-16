/**
 * 图片跨域处理
 */
export default (src: string): string => {
  if (!src || !src.startsWith("http")) {
    return src;
  }
  if (src.includes("/cors/")) {
    return src;
  }
  const url = new URL(src);
  const localList = ["localhost", "127.0.0.1", "192.168"];
  const lang = import.meta.env.VITE_I18N_LANGUAGE;
  const lineHost = lang === "en-US" ? "app.collov.ai" : "collov.cn";
  const hostName = localList.includes(location.hostname) ? lineHost : location.hostname;
  if (src.includes("/cors/")) {
    return src;
  }
  if (hostName) {
    return "https://" + hostName + "/cors/" + encodeURIComponent(url.hostname + url.pathname);
  } else {
    return src;
  }
};
