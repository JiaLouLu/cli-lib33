#! /usr/bin/env node

// 入口脚本
const importLocal = require("import-local")

if (importLocal(__filename)) {
  require("npmlog").info("cli", "running local")
  console.log("111")
} else {
  // 执行 core 函数
  const core = require("../lib/index.js")
  core(process.argv.slice(2)) // 假设 core 是一个需要参数的函数
  require("npmlog").info("cli", "running local")
  console.log("12")
}
