export default () => {
  let flag = true;
  const stop = () => (flag = false);
  const start = () => (flag = true);

  const run = async (options: any) => {
    const {
      promiseFn,
      resolveFn = () => true,
      params = {},
      retry = 0,
      interval = 1000,
    } = options;
    return new Promise(async (resolve, reject) => {
      let count = 0;
      while (flag) {
        count++;
        try {
          const res = await promiseFn(params);
          if (resolveFn && resolveFn(res)) {
            resolve(res);
            break;
          }
          await sleep(interval);
        } catch (e) {
          reject(e);
          break;
        }
        if (retry && count >= retry) {
          break;
        }
      }
    });
  };
  return { stop, start, run };
};
