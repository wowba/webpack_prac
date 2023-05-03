import getRandomAddress from "./randomAddress" 
import { nanoid } from "nanoid"
// css 를 js에서 import 하고, html에서 해당 js 파일을 다시 불러오기 때문에
// html에 css가 적용된다.
import './styles/main.scss'
import sky from './assets/sky.jpeg'

const img = document.getElementById("sky")
img.src = sky

getRandomAddress()
console.log(nanoid())