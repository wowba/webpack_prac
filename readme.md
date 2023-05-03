# Webpack Prac

## Webpack 설치
```
npm i -D webpack webpack-cli
```
---
## Webpack Loader 설치
```
npm i -D css-loader style-loader sass sass-loader
```
- style-loader
  - DOM에 스타일로 모듈 내보내기 가능 / 
  - css-loader를 이용해서 import 구문을 이용해 js 파일에서 불러오는 css 파일이 html 파일 내 \<style\> 태그로 존재하게 함.
- css-loader: 
  - 리졸브 된 가져오기로 css 파일 로드 및 css 코드 반환 
  - @import 및 url()을 import/require 처럼 해석 css 파일을 하나의 모듈로 취급하여 js 파일에서 불러와서 사용하는 것.
---
## HTML Webpack Plugin
- 웹팩이 html 파일을 읽어서 html 파일을 빌드할 수 있게 만들어 줌.
```
npm i -D html-webpack-plugin
```
### plugin 종류
- HtmlWebpackPlugin
  - webpack 번들을 제공하는 HTML 파일 생성 단순화
- CleanWebpackPlugin
  - 빌드 이전 결과물 제거
- MiniCssExtractPlugin
  - CSS가 필요한 JS 파일별로 CSS 파일 생성
---
## Webpack Caching
- 웹팩 컴파일로 생성된 파일에서 변경된 내용이 없다면 브라우저는 캐시 상태를 유지하고 그대로 사용하게 됨.
- 변경사항 생길시 파일 이름에 Hash 값을 주어 변경 여부 확인 가능.
---
## Webpack development server
- 웹팩에서 자체적으로 개발 서버 실행 가능
- config 파일에 devServer 항목 작성 후 실행 가능
```
npm install -D webpack-dev-server
```
---
