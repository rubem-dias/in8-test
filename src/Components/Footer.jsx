import React from 'react'
import '../Assets/styles/Footer.css'
import footerBg from '../Assets/Images/rodape-desktop.jpg'

export default function Footer() {
  return (
    <div className="footer" style={{ backgroundImage: `url(${footerBg})` }}>
        <h1 className="footer-h1"> Rubem Dias da Silva </h1>
        <br></br>
        <h1 className="footer-h1"> rubemdias65@gmail.com </h1>
        <br></br>
        <h1 className="footer-h1"> (31) 9 91007682 </h1>
        <br></br>
        <h1 className="footer-h1"> Faculdade de Belo Horizonte </h1>
    </div>
  )
}
