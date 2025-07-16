/**
 * 文件流转为本地图片链接
 * @param file 文件流 (Blob | File)
 * @returns 对象URL字符串或null
 */
export default (file: Blob | File): string | null => {
  if (typeof window === "undefined") {
    return null; // 非浏览器环境
  }

  try {
    // 1. 优先使用标准 URL API
    if (typeof URL !== "undefined" && URL.createObjectURL) {
      return URL.createObjectURL(file);
    }

    // 2. 兼容旧浏览器写法
    if (window.URL && window.URL.createObjectURL) {
      return window.URL.createObjectURL(file);
    }

    // 3. 兼容webkit前缀的旧版本
    if (window.webkitURL && window.webkitURL.createObjectURL) {
      return window.webkitURL.createObjectURL(file);
    }

    return null;
  } catch (error) {
    console.error("创建对象URL失败:", error);
    return null;
  }
};
