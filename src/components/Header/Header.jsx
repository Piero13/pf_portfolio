import { useState } from 'react';

import logo from '../../assets/logo.png'
import toggleIcon from '../../assets/toggle_icon.png'

const reload = () => {
    window.location.replace("/#home");
}

function Header() {
    const [showNavbar, setShowNavbar] = useState(false);
    const handleShowNavbar = (item) => {
        setShowNavbar(!showNavbar);
    };

    return (
        <>
            <header id="header" className="header">
                <div className="title">
                    <img src={ logo } alt="logo du site" className="title__logo" onClick={ reload }/>
                    <div className="title__text">
                        <h1>Pierre Fasce</h1>
                        <p>Développeur Web</p>
                    </div>
                </div>
                <nav className="navbar">
                    <div className="ham-menu" onClick={ handleShowNavbar }>
                        <img src={ toggleIcon } alt="menu format mobile" />
                    </div>
                    <div className='navbar__elements'>
                        <ul>
                            <li>
                                <a href='#home' id='homeLink' className='link navbar__link' onClick={ handleShowNavbar }>Accueil</a>
                            </li>
                            <li>
                                <a href='#profile' id='profileLink' className='link navbar__link' onClick={ handleShowNavbar }>Profil</a>
                            </li>
                            <li>
                                <a href='#portfolio' id='portfolioLink' className='link navbar__link' onClick={ handleShowNavbar }>Portfolio</a>
                            </li>
                            <li>
                                <a href='#skills' id='skillsLink' className='link navbar__link' onClick={ handleShowNavbar }>Compétences</a>
                            </li>
                            <li>
                                <a href='#contact' id='contactLink' className='link navbar__link' onClick={ handleShowNavbar }>Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default  Header