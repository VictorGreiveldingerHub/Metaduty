import React from 'react';

import './style.css';

const Game = () => {
    return (
        <div className='gaming-section'>
            <section className='left-section-learning'>
                <h2>La blockchain</h2>
                <div>
                    <h4>Genesis</h4>
                    <div>
                        <p>
                            A l'origine, blockchain est un terme informatiquequi désigne ce qui permet de structurer et de partager des données. Aujourd'hui, les blockchains sont qualifiées de cinquième évolution majeure de l'informatique. Elles constituent une nouvelle approche de la base de données distribuée. L'innovation vient de l'intégration d'anciennes technologies avec de nouvelles méthodes. Vous pouvez considérer les blockchains comme des bases de données distribuées qu'un groupe d'individus contrôle et qui stocke et partage l'information.
                        </p>
                        <p>
                            Il existe plusieurs sortes de blockchains et d'applications blockchain. La blockchain est une technologie globale qui s'intègre à toutes les plateformes et tous matériels partout dans le monde.
                        </p>
                    </div>
                </div>
                <div>
                    <h4>Présentation des blockchains</h4>
                    <div>
                        <p>
                            Une blockchain est une struture de données qui permet de créer un livre numérique de données et de le partager dans un réseau d'individus indépendants. Il existe différentes sortes de blockchains.
                        </p>
                        <ul>
                            <li>
                                <h5>Blockchains publiques (permissionless blockchains) :</h5>
                                <p>
                                    Les blockchains publiques, telles que Bitcoin, sont de grands réseaux distribués qui sont exécutés via un jeton natif ou token. Elles sont ouvertes à tous et à tout niveau, et ont un code source ouvert que leur communauté maintient à jours.
                                </p>
                            </li>
                            <li>
                                <h5>Blockchains autorisées (permissioned blockchains) :</h5>
                                <p>
                                    Les blockchains autorisées, telles que Ripple, contrôlent les rôles que les individus peuvent jouer au sein du réseau. Elles sont toujours étendues et possèdent des systèmes distribués qui utilisent un token natif. Leur code source peut ou non être open source.
                                </p>
                            </li>
                            <li>
                                <h5>Blockchains privées :</h5>
                                <p>
                                    Les blockchains privées ont tendance à être plus petites et à ne pas utiliser de token. Leur accès est étroitement contrôlé. Ces types de blockchains sont favorisés par les consortiums qui ont des membres affiliés qui échangent des informations confidentielles.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            Les trois types de blockchains utilisent la cryptographie pour permettre à chaque participant sur un réseau donné de gérer le grand livre (registre) de manière sécurisée sans avoir besoin d'une autorité centrale pour appliquer les règles. L'élimination de l'autorité centrale de la structure de la base de données est l'un des apsects les plus importants et les plus puissants des blockchains.
                        </p>
                        <p>
                            Les blockchains créent des enregistrements permanents et l'historisation des transactions, mais rien n'est vraiment permanent. La permanence de l'enregistrement est fondée sur la permanence du réseau. Dans le contexte des blockchains, cela signifie qu'une grande partie d'une communauté blockchain doit accepter de modifier l'information et est incitée à ne pas modifier les données.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <p>ZONE POUR METTRE LES QCMs</p>
            </section>
        </div>
    );
};

export default Game;