import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Cards from "../Card/Card";
import { Select } from "antd";
import "./Rencontre.css";

function Rencontre() {
  const [data, setData] = useState([]);
  useEffect(() => {
    resquestApi();
  }, []);
  const resquestApi = async () => {
    const url = "http://localhost:4000/profile";

    try {
      const resquest = await fetch(url);
      const json = await resquest.json();
      console.log(json);
      setData(json);
    } catch (e) {
      console.log(`Error : ${e}.`);
    }
  };

  const { Option } = Select;
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="container-rencontre">
      <Navbar />
      <h1 className="title-rencontre">Rencontre</h1>
      <div className="filter">
        <Select
          defaultValue="Type"
          style={{ width: 120, marginRight: "20px" }}
          onChange={handleChange}
        >
          <Option value="menager">Ménager</Option>
          <Option value="Lego">Lego</Option>
          <Option value="Droïd">Droïd</Option>
          <Option value="Autobot">Autobot</Option>
        </Select>
        <Select
          defaultValue="Relation"
          style={{ width: 120, marginLeft: "20px" }}
          onChange={handleChange}
        >
          <Option value="Galactique">Galactique</Option>
          <Option value="Electrique">Electrique</Option>
          <Option value="Bien huilé">Bien huilé</Option>
          <Option value="Court-circuité">Court-circuité</Option>
        </Select>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        {data &&
          data.map((item) => (
            <Cards
              key={item.id}
              title={item.name}
              img={item.picture}
              description={item.biography}
            />
          ))}
      </div>
    </div>
  );
}

export default Rencontre;
