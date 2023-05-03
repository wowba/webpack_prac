# Webpack Prac

## Webpack 설치
```
npm i -D webpack webpack-cli
```

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