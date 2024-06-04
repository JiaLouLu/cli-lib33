// lib/index.js
"use strict"

// 导出 core 函数
module.exports = core
const pkg = require("../package.json")
function core() {
  // 输出 Hello from core
  console.log(pkg.version)
}
