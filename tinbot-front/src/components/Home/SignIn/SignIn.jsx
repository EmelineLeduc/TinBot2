import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
import "./SignIn.css";

function SignIn() {
  const [type, setType] = useState("Robot ménager");
  const [relation, setRelation] = useState("bien-huilée");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [bio, setBio] = useState("");
  const [profile, setProfile] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const contactsubmit = {
      type: type,
      relation: relation,
      name: name,
      picture: picture,
      biography: bio,
    };

    axios
      .post("http://localhost:4000/profile", { ...contactsubmit })
      .then(function () {
        setType("");
        setRelation("");
        setName("");
        setPicture("");
        setBio("");
        setProfile([...profile, contactsubmit]);

        message.success({
          content: "Votre profil a bien été crée",
          className: "custom-class",
        });
      })
      .catch(function () {});
  }

  return (
    <div className="big-container">
      <div className="container-f">
        <h2>Créer votre profil</h2>
        <form className="container-form" onSubmit={handleSubmit}>
          <label for="type">Choisissez votre type</label>
          <select
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="ménager">Robot ménager</option>
            <option value="droïd">Droïd</option>
            <option value="autobot">Autobot</option>
            <option value="lego">Lego</option>
            <option value="drone">Drone</option>
          </select>

          <label for="relation">Que cherchez-vous ?</label>
          <select
            name="relation"
            value={relation}
            onChange={(e) => setRelation(e.target.value)}
          >
            <option value="bien-huilée">Bien Huilée</option>
            <option value="court-circuit">Court-Circuit</option>
            <option value="électrique">Electrique</option>
            <option value="Galactique">Galactique</option>
          </select>

          <label htmlFor="name">Votre Nom</label>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          <label htmlFor="image" required>
            Votre photo de profil (lien URL)
          </label>
          <input
            name="image"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          ></input>

          <label htmlFor="bio">Votre description</label>
          <textarea
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          ></textarea>
          <div className="button-container">
            <button type="submit">Je m'inscris</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
