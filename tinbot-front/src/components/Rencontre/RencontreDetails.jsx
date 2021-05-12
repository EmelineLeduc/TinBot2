/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Cards from "../Card/Card";
import Navbar from "../Navbar/Navbar";

import { List } from "antd";
import "./RencontreDetails.css";

function RencontreDetails(props) {
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
    <div className="container-profile">
      <Navbar />
      <h1 className="title-profile">Profil</h1>
      <div style={{ display: "flex" }}>
        <Cards
          img={details.picture}
          title={details.name}
          description={details.biography}
          affichage={false}
        />
        <List
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
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

export default RencontreDetails;
