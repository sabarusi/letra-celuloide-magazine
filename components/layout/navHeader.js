import React, { useState } from "react";
import Link from "next/link";

const NavHeader = () => {
    //Hooks
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const handleMobile = () => setClick(false);
    //Links
    const linkInit = (link, text) =>{
        return {
            link,
            text
        };
    }
    const openMenu = <svg className="menu_icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
    const closeMenu = <svg className="menu_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                            </svg>

    const isMobileMenu = click ? "menu_list active" : "menu_list"; 
    return <header>
            <div className="container_nav">
                <Link href="/">
                <a>
                <div className="nav_logo" >
                    <img id="img_logo-desktop" src="/img/logo.png" alt="Letraceluloide"/>
                    <img id="img_logo-mobile" src="/img/logo-mobile.png" alt="Letraceluloide" />
                </div>
                </a>
                </Link>
                <div className="media">
                    <div className="icon social">
                        <a href="https://www.facebook.com/letraceluloidemag"><svg className="svg-icon" id="Facebook" width="36" height="36" ariaHidden="true" role="img" focusable="false" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" ><path d="M20.007,3H3.993C3.445,3,3,3.445,3,3.993v16.013C3,20.555,3.445,21,3.993,21h8.621v-6.971h-2.346v-2.717h2.346V9.31 c0-2.325,1.42-3.591,3.494-3.591c0.993,0,1.847,0.074,2.096,0.107v2.43l-1.438,0.001c-1.128,0-1.346,0.536-1.346,1.323v1.734h2.69 l-0.35,2.717h-2.34V21h4.587C20.555,21,21,20.555,21,20.007V3.993C21,3.445,20.555,3,20.007,3z"></path></svg></a>
                    </div>
                    <div className="icon social">
                        <a href="https://www.instagram.com/celuloideletra"><svg className="svg-icon" id="Instagram" width="36" height="36" ariaHidden="true" role="img" focusable="false" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" ><path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path></svg></a>
                    </div>
                </div>
                
                <div className="icon">
                    <div className="mobile_menu" onClick={handleClick}>
                         {click ? 
                        closeMenu
                                 : 
                        openMenu
                                }
                    </div>
                </div>
            </div>
            <div className="nav_menu">
                        <ul className={isMobileMenu} onClick={handleMobile}>
                                <li className="elemento-lista">
                                    <Link href="/about">
                                        <a>La revista</a>
                                    </Link>
                                </li>
                                <li className="separador_menu">|</li>
                                <li className="elemento-lista">
                                    <Link href="/archivo/1">        
                                        <a>Archivo</a>
                                    </Link>
                                </li>
                                <li className="separador_menu">|</li>
                                <li className="elemento-lista">
                                        <Link href="#contacto">
                                            <a>Contacto</a>
                                        </Link>
                                </li>
                        </ul>
            </div>
            </header>
}

export default NavHeader;