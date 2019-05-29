module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: 'eslint:recommended',
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false
    }
  },
  rules: {
    // 缩进
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'], // 引号
    quotes: [1, 'single'], // 分号结尾
    semi: ['error', 'always'],
    'no-unused-vars': [
      2,
      {
        // 允许声明未使用变量
        vars: 'local', // 参数不检查
        args: 'none'
      }
    ], // 最大空行100
    'no-multiple-empty-lines': [0, { max: 200 }],
    'no-mixed-spaces-and-tabs': [0], //不能使用console
    'no-console': 'off', //未定义变量不能使用
    'no-undef': 0, //一行结束后面不要有空格
    'no-trailing-spaces': 1, //强制驼峰法命名
    camelcase: 2, //对象字面量项尾不能有逗号
    'comma-dangle': [2, 'never'], //this别名
    'consistent-this': [2, 'that']
  }
};
