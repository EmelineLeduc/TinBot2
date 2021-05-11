import React from 'react';

import './profil.css';

function ProfileApp() {
    
    return(

        <div className="container-profil">
            <div className="profil-profil">profile</div>
            <div className="profil-name">Name</div>
            <div className="profil-type">type</div>
            <div className="profil-relation">relation</div>
            <img className="profil-picture" src="https://media.anakinworld.com/uploads/entries/original/dup-personnage-c-3po.jpg"></img>
            <div className="profil-size">size</div>
            <div className="profil-weight">weight</div>
            <div className="profil-color">color</div>
            <div className="profil-hobbie">hobbie</div>
            
        </div>
    )
}

export default ProfileApp;