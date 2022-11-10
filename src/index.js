import "./default.scss"
import Header from "./datas/Header"
import Footer from "./datas/Footer"
const app = document.querySelector('#app')

let contentHome = ""

contentHome += Header('Bienvenue à tous !!!')
contentHome += Footer('Mon footer !!!')

app.innerHTML = contentHome