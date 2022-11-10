const Footer = (footerTitle, bgc="cadetblue") => {
    return(
    `
    <footer style="background-color:${bgc}">
        <p>${footerTitle}</p>
    </footer>
`
    )
}

export default Footer 