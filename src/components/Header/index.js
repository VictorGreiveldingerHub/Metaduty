// == Import npm
import { Link } from "react-router-dom";

// == Import local
import './style.css';
import logo from '../Header/logo.jpeg';


// == Import composants


const Header = () => {
  return (
    <nav className="header">
        <div className="menu-items">
        <div className="items">
            <a href='/'>
                <figure>
                    <img src={logo} alt="metaduty"/>
                    <figcaption>Metaduty</figcaption>
                </figure>
            </a>
        </div>
        <div className="items">
            <Link to='/game'>Jouer</Link>
        </div>
          <div className="items">
              <Link to='/train'>S'entraîner</Link>
          </div>
          <div className="items">
              <Link to='/login'>Se connecter</Link>
          </div>
          <div className="items">
              <Link to='/signup'>S'inscrire</Link>
          </div>
      </div>
    </nav>
  );
}

export default Header;
