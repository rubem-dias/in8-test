
import { useState, useEffect } from 'react';
import React from 'react'
import logo from '../Assets/Images/logo-in8-dev.svg'
import bg from '../Assets/Images/index-image.jpg'
import bgmobile from '../Assets/Images/index-image-mobile.jpg'
import '../Assets/styles/Main.css'

export default function Main() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = window.innerWidth >= 670 ? bg : bgmobile

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
    <>
        <div className="container" style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
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

            <div className="menu-sec">
            <section class="p-menu1">
                <nav id="navbar" class="navigation" role="navigation">
                    <input id="toggle1" type="checkbox" />
                        <label class="hamburger1" for="toggle1">
                            <div class="top"></div>
                            <div class="meat"></div>
                            <div class="bottom"></div>
                        </label>
                    <nav class="menu1">
                        <a class="link1" href="">lista</a>
                        <a class="link1" href="">sobre mim</a>
                        <a class="link1" href="">cadastro</a>
                    </nav>
                </nav>
            </section>
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
