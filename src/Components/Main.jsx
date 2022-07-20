import React from 'react'
import logo from '../Assets/Images/logo-in8-dev.svg'
import bg from '../Assets/Images/index-image.jpg'
import '../Assets/styles/Main.css'

export default function Main() {
  return (
    <>
        <div className="container" style={{ backgroundImage: `url(${bg})` }}>
            <div className="nav-bar">
                    <img src={logo} alt="logo" className="logo"/>
                    <ul className="nav-list">
                        <li> cadastro </li>
                        <span class="dot"></span>
                        <li> lista </li>
                        <span class="dot"></span>
                        <li> sobre mim </li>
                    </ul>
            </div>
            <div className="content">
                <div className="main-content font-face-Helvetica">
                    <h1 className="title"> ESTÁGIO </h1>
                    <h3 className="subtitle"> PROVA DE SELEÇÃO</h3>
                </div>
            </div>
        </div>
    </>
  )
}
