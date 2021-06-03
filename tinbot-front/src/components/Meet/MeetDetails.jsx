/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { List } from "antd";
import Cards from "../Meet/Card/Card";
import Header from "../Header/Header";
import "./MeetDetails.css";

function MeetDetails(props) {
  const [details, setDetails] = useState([]);
  const params = props.match.params;

  useEffect(() => {
    resquestApi();
  }, []);

  const data = [
    `Taille : ${details.size}`,
    `Poids : ${details.weight}`,
    `Couleur : ${details.color}`,
    `Hobbie : ${details.hobbie}`,
  ];

  const resquestApi = async () => {
    const url = ` http://localhost:4000/profile/${params.id}`;

    try {
      const resquest = await fetch(url);
      const json = await resquest.json();
      console.log(json);
      setDetails(json);
    } catch (e) {
      console.log(`Error : ${e}.`);
    }
  };
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
          img={details.picture}
          title={details.name}
          description={details.biography}
          affichage={false}
        />
        <List
          className="meet-list"
          style={{
            border: "none",
          }}
          size="small"
          header={
            <div style={{ color: "white", fontSize: "20px" }}>
              {details.type}
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
