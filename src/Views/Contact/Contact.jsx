import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <form action="">
        <h6>Nom: *</h6>
        <input type="text" />
        <h6>Prenom: *</h6>
        <input type="text" />
        <h6>Société: *</h6>
        <input type="text" />
        <h6>Numéro de téléphone: *</h6>
        <input type="text" />
        <h6>Email: *</h6>
        <input type="text" />
        <h6>Messages: *</h6>
        <input type="area" />
      </form>
      <div>
        <input type="checkbox" />
        <h6>
        J’accepte que les données de ce formulaire soit envoyées par e-mail à contact@softwebdev.fr
        </h6>
      </div>
      <button>Envoyé</button>
    </div>
  );
}

export default Contact;
