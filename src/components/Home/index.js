// == Import npm
import React from 'react';

// == Import local
import './style.css';


// == Import composants

const Home = ({
    changeGreeting,
    setGreeting
}) => {
  return (
    <div className="homepage">
        <div className="step-1">
            <h3>Pourquoi ce site ?</h3>
            <div className='right-section'>
                Dans le cadre de notre projet de fin d'étude, nous vous proposons une dApp pour en savoir un peu plus sur le monde de la blockchain.
            </div>
        </div>
        <div className="step-2">
            <h3>Comment ça marche ?</h3>
            <div className='left-section'>
                Pour bien utiliser notre application nous vous invitons à suivre dans un premier temps les étapes pour se connecter et lié votre compte metamask.
            </div>
        </div>
        <div className="step-1">
            <h3>Etapes pour se connecter et jouer</h3>
            <div className='right-section'>
                <ol>
                    <li>
                        Télécharger Metamask via ce <a href="https://metamask.io/download/" target="_blank" rel='noreferrer'>lien</a>
                    </li>
                    <li>
                        Remplir le formulaire d'inscription
                    </li>
                    <li>
                        Lorem lreom lremorl morermla rale eraer  eal pfe
                    </li>
                </ol>
            </div>  
        </div>
    </div>
  );
}

export default Home;
