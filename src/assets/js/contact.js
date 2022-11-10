import "../../default.scss"
import Header from "../../datas/Header"
import Footer from "../../datas/Footer"
const appContact = document.querySelector('#appContact')

let contentContact = ""

contentContact += Header('Contactez-nous !', 'brown')
contentContact += Footer('Jdead ca chakal !!!', 'red')

appContact.innerHTML = contentContact