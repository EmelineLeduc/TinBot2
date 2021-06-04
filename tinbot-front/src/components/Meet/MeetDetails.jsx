/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import firebase from "../../utils/firebaseConfig";
import { List } from "antd";
import Cards from "../Meet/Card/Card";
import Header from "../Header/Header";
import "./MeetDetails.css";

function MeetDetails(props) {
  const [profile, setProfile] = useState({});
  const params = useParams();

  const data = [
    `Taille : ${profile.size}`,
    `Poids : ${profile.weight}`,
    `Couleur : ${profile.color}`,
    `Hobbie : ${profile.hobbie}`,
  ];

  useEffect(() => {
    firebase
      .database()
      .ref("profileDB")
      .child(params.id - 1)
      .once("value")
      .then((snapshot) => setProfile(snapshot.val()))
      .catch((error) => ({
        errorCode: error.code,
        errorMessage: error.message,
      }));
  }, []);

  return (
    <div className="profile-container">
      <Header />
      <h1 className="profile-title">Profil</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Cards
          img={profile.picture}
          title={profile.name}
          description={profile.biography}
          display={false}
        />
        <List
          className="meet-list"
          style={{
            border: "none",
          }}
          size="small"
          header={
            <div style={{ color: "white", fontSize: "20px" }}>
              {profile.type}
            </div>
          }
          footer={<div></div>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item style={{ color: "white" }}>{item}</List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default MeetDetails;
