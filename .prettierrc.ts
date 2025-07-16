export default {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 100, // 每行文字数量达 100 字元就换到新的一行
  semi: false, // 每个语句的结尾不需要分号
  singleQuote: true, // 字串使用单引号，而不是双引号
  trailingComma: "none", // 如 Object、Array 内的元素不需要尾随逗号
  /*在对象字面量中的括号之间添加空格*/
  bracketSpacing: true,
  /*当箭头函数只有一个参数时，省略参数前后的括号*/
  arrowParens: "avoid",
  /*script和style标签中间的内容缩进*/
  vueIndentScriptAndStyle: true,
  // 将>多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭合元素
  bracketSameLine: false,
};
