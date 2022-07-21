import { useEffect, useState } from 'react'
import React from 'react'
import '../Assets/styles/Footer.css'
import footerBg from '../Assets/Images/rodape-desktop.jpg'
import footerBgMobile from '../Assets/Images/rodape-mobile.jpg'

export default function Footer() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = window.innerWidth >= 900 ? footerBg : footerBgMobile

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
  }, []);

  return (
    <div className="footer" style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
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
