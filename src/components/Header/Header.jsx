import logo from '../../assets/logo.png'
import './_header.scss';

const reload = () => {
    window.location.replace("/#home");
}

function Header() {
    return (
        <>
            <header id="header" className="header">
                <div className="title">
                    <img src={logo} alt="logo du site" className="title__logo" onClick={reload}/>
                    <div className="title__text">
                        <h1>Pierre Fasce</h1>
                        <p>Développeur Web</p>
                    </div>
                </div>
                <nav className="navbar">
                    <a href='#home' className='link navbar__link'>Accueil</a>
                    <a href='#profile' className='link navbar__link'>Profil</a>
                    <a href='#portfolio' className='link navbar__link'>Portfolio</a>
                    <a href='#skills' className='link navbar__link'>Compétences</a>
                    <a href='#contact' className='link navbar__link'>Contact</a>
                </nav>
            </header>
        </>
    )
}

export default  Header