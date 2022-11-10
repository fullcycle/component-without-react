const Header = (title, bgc="cadetblue") => {
    return(
    `
    <header style="background-color:${bgc}">
        <h1>${title}</h1>
        <nav>
            <a href="index.html">HOME</a>
            <a href="contact.html">CONTACT</a>
        </nav>
    </header>
`
    )
}

export default Header 