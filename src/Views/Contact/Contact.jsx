import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <form action="">
        <h4>Nom: *</h4>
        <input type="text" />
        <h4>Prenom: *</h4>
        <input type="text" />
        <h4>Société: *</h4>
        <input type="text" />
        <h4>Numéro de téléphone: *</h4>
        <input type="text" />
        <h4>Email: *</h4>
        <input type="text" />
        <h4>Messages: *</h4>
        <input type="area" />
      </form>
      <div>
        <input type="checkbox" />
        <h4>
        J’accepte que les données de ce formulaire soit envoyées par e-mail à contact@softwebdev.fr
        </h4>
      </div>
      <button>Envoyé</button>
    </div>
  );
}

export default Contact;
