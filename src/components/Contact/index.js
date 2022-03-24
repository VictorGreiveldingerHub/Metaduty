import React from 'react';

import './style.css';

const Contact = () => {
    return (
        <div>
            <h2>Pour nous contacter :</h2>
            <form>
                <div>
                    <label for="name">Nom :</label>
                    <input type="text" id="name" name="user_name"/>
                </div>
                <div>
                    <label for="mail">Mail :</label>
                    <input type="email" id="mail" name="user_mail"/>
                </div>
                <div>
                    <label for="msg">Message :</label>
                    <textarea id="message" name="user_msg"></textarea>
                </div>
                <div>
                    <button type="submit">Envoyer le message</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;