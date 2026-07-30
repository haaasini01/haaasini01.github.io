import './styles/hero.css';
import HeroSection from './components/HeroSection';
import Ticker from './components/Ticker';

const App: React.FC = () => {
  return (
    <>
      {/* NAV — commented out to match hero.html */}
      {/* <nav>
        <a href="#" className="nav-logo">hasini</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav> */}

      <HeroSection />
      <Ticker />
    </>
  );
};

export default App;
