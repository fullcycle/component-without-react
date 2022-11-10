import "./default.scss"
import Header from "./datas/Header"
import Footer from "./datas/Footer"
const app = document.querySelector('#app')

let contentHome = ""

contentHome += Header('Welcome')
contentHome += Footer('Mon footer !!!')

app.innerHTML = contentHome