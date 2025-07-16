/**
 * base64转为文件流
 */
export default (base64Data: string, filename: string = "uploadFile.png") => {
  // 将base64的数据部分提取出来
  const parts = base64Data.split(";base64,");
  const contentType = parts[0].split(":")[1];
  let strArr = contentType.split("/");
  const raw = window.atob(parts[1]);
  // 将原始数据转换为Uint8Array
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);
  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  // 使用Blob和提取出的数据内容创建一个新的Blob对象
  const blob = new Blob([uInt8Array], { type: contentType });
  // 创建一个指向Blob对象的URL，并使用这个URL创建一个File对象
  const blobUrl = URL.createObjectURL(blob);
  const newFilename = filename + "." + strArr[1];

  const file = new File([blob], newFilename, { type: contentType });
  // 返回File对象
  return file;
};
