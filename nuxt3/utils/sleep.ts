/**
 * 等待时间
 * @returns void 0
 */
export default (time = 1000) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
