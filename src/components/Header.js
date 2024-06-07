import React, { useState } from 'react';
import './style.css';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);
    const Links = ({ href, text, disabled }) => {
        return (
            <li className='nav-item'>
                <a href={href} className={`nav-link ${disabled ? 'disabled' : ''}`} target='_blank' rel='noreferrer'>{text}</a>
            </li>
        );
    };

    return (
        <>
            <nav className="nav-container">
                <div className="container-fluid p-1 text-center">
                    <span className="navbar-brand  mb-0">3D PEPE</span>
                    <button className="nav-toggle" onClick={handleToggle}>
                        &#9776;
                    </button>
                </div>
                
                <div className={`nav-offcanvas ${show ? 'nav-show' : 'nav-hide'}`}>
                  <button className='nav-close' onClick={handleToggle}>&times;</button>
                    <ul className="nav mb-2 flex-column justify-content-center">
                        <Links href="https://t.me/Pepe3Dmemes" text="TELEGRAM" />
                        <Links href="https://twitter.com/3Dpepememe" text="TWITTER" />
                        <Links href="#" text="BUY NOW" disabled/>
                        <Links href="#" text="CHARTS" disabled/>
                        <Links href="#" text="DEXTOOLS" disabled/>
                    </ul>
                </div>
                <ul className="nav mb-2 justify-content-center nav-links-large-screen">
                    <Links href="https://t.me/Pepe3Dmemes" text="TELEGRAM" />
                    <Links href="https://twitter.com/3Dpepememe" text="TWITTER" />
                    <Links href="#" text="BUY NOW" disabled/>
                    <Links href="#" text="CHARTS" disabled/>
                    <Links href="#" text="DEXTOOLS" disabled/>
                </ul>
            </nav>
            {show && <div className="overlay" onClick={handleToggle}></div>}
        </>
    );
};

export default Header;