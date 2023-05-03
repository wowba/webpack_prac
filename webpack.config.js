const path = require("path")

module.exports = {
  mode: 'development',
  // 시작점
  entry: path.resolve(__dirname, 'src/index.js'),
  // 작업 이후 생성된 결과물
  output: {
    path:  path.resolve(__dirname, 'dist/'),
    filename: 'main.js'
  }
}