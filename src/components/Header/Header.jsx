import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import './_header.scss';

function Header() {
    return (
        <>
            <header className="header">
                <div className="title">
                    <img src={logo} alt="logo du site" className="title__logo"/>
                    <div className="title__text">
                        <h1>Pierre Fasce</h1>
                        <p>Développeur Web</p>
                    </div>
                </div>
                <nav className="navbar">
                    <NavLink to='/#home' className='link navbar__link'>Accueil</NavLink>
                    <NavLink to='/#profile' className='link navbar__link'>Profil</NavLink>
                    <NavLink to='/#portfolio' className='link navbar__link'>Portfolio</NavLink>
                    <NavLink to='/#skills' className='link navbar__link'>Compétences</NavLink>
                    <NavLink to='/#contact' className='link navbar__link'>Contact</NavLink>
                </nav>
            </header>
        </>
    )
}

export default  Header