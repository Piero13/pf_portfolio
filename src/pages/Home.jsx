import Profile from '../components/Profile/Profile';
import Portfolio from '../components/Portfolio/Portfolio';

function Home() {
  return (
    <main>

      <div id="home" className='home'>
        <p className="home__title">
          Pierre FASCE
        </p>
        <p className="home__text">
          {"<Développeur Web Frontend>"}
        </p>
        <a className='btn' href="#profile">Plus d'infos</a>
      </div>

      <Profile id='profile' title='À propos de moi'/>

      <div className='interSection'>

      </div>

      <Portfolio id='portfolio' title='Portfolio'/>

      <div className='interSection'>

      </div>
      
    </main>
  );
}

export default Home;
