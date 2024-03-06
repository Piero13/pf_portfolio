import { useState , useEffect} from 'react';

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

    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentActive = '';

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 50) {
                    currentActive = section.id
                }
            });
            
            setActiveLink(currentActive);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    })

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
                    <div className={ `navbar__elements ${ showNavbar && 'active'}` }>
                        <ul>
                            <li>
                                <a href='#home' id='homeLink' className={`link navbar__link ${activeLink === 'home' ? 'active' : ''}`} onClick={ handleShowNavbar }>Accueil</a>
                            </li>
                            <li>
                                <a href='#profile' id='profileLink' className={`link navbar__link ${activeLink === 'profile' ? 'active' : ''}`} onClick={ handleShowNavbar }>Profil</a>
                            </li>
                            <li>
                                <a href='#portfolio' id='portfolioLink' className={`link navbar__link ${activeLink === 'portfolio' ? 'active' : ''}`} onClick={ handleShowNavbar }>Portfolio</a>
                            </li>
                            <li>
                                <a href='#skills' id='skillsLink' className={`link navbar__link ${activeLink === 'skills' ? 'active' : ''}`} onClick={ handleShowNavbar }>Compétences</a>
                            </li>
                            <li>
                                <a href='#contact' id='contactLink' className={`link navbar__link ${activeLink === 'contact' ? 'active' : ''}`} onClick={ handleShowNavbar }>Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default  Header