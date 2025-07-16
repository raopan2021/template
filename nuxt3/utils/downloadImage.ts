export default (url: string, fileName?: string) => {
  return new Promise<void>((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "Anonymous"; // 更标准的跨域设置方式

    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;

        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas 2D 上下文获取失败");

        ctx.drawImage(image, 0, 0);
        const dataUrl = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.download = fileName || String(Date.now());
        link.href = dataUrl;
        link.click();

        resolve(); // 成功完成
      } catch (error) {
        reject(error); // 捕获错误
      }
    };

    image.onerror = () => {
      reject(new Error("图片加载失败"));
    };

    image.src = corsImgSrc(url) as string;
  });
};
