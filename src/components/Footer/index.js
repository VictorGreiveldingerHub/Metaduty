// == Import npm
import { Link } from 'react-router-dom';

// == Import local
import './style.css';


// == Import composants

const Footer = () => {
  return (
    <div className="footer">
        <div className="mentions">
            <Link to='/mentions-legales'>Mentions légales</Link>
        </div>
        <div className="contact">
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  );
}

export default Footer;
