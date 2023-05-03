const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'development',
  // 시작점
  entry: path.resolve(__dirname, 'src/index.js'),
  // 작업 이후 생성된 결과물
  output: {
    path:  path.resolve(__dirname, 'dist/'),
    // 웹팩으로 작업시 매번 해쉬값을 가진 js 파일 생성
    filename: '[name][contenthash].js',
    // 기존 웹팩 빌드 파일 삭제
    clean: true
  },
  // 해당 옵션 적용시 원본 소스 확인 가능
  devtool: 'source-map',
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
  },
  plugins: [
    // 플러그인을 다양한 용도로 호출할 수 있으므로 new 연산자로 호출하여 플러그인의 인스턴스를 생성하여 사용
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    // 제공되는 모든 항목에 gzip 압축 활성화
    compress: true,
    port: 3000,
    open: true
  }
}