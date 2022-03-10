// == Import : npm
import React from 'react'; // couche 1
import { render } from 'react-dom'; // couche 2
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// == Import : local
// Composants
import App from './components/App';
import './style.css';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
    <React.StrictMode>
      <Router>
          <App />
      </Router>
    </React.StrictMode>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();