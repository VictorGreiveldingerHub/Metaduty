import React from 'react';

import './style.css';

const Contact = () => {
    return (
        <div>
            <h2>Pour nous contacter :</h2>
            <form>
                <label>
                    Nom :
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default Contact;