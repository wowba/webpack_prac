const path = require("path")

module.exports = {
  mode: 'development',
  // 시작점
  entry: path.resolve(__dirname, 'src/index.js'),
  // 작업 이후 생성된 결과물
  output: {
    path:  path.resolve(__dirname, 'dist/'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        // 로더를 적용할 파일 유형 (일반적으로 정규표현식 사용)
        test: /\.s[ac]ss$/i,
        // 해당 파일에 적용할 로더 종류
        // 배열 안에 있는 값들의 역순으로 로더가 작동함.
        // style-loader는 css-loader가 css 확장자의 파일을 번들링 후
        // style 태그를 이용해 html에 적용할 수 있으므로 순서를 지켜야 한다.
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
}