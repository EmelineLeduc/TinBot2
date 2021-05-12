import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Cards from "../Card/Card";
import { Select, Button } from "antd";
import "./Rencontre.css";

function Rencontre() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [resetbtn, setResetbtn] = useState(false);

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
      setFilterData(json);
    } catch (e) {
      console.log(`Error : ${e}.`);
    }
  };

  const { Option } = Select;

  const filterMenager = (value) => {
    setResetbtn(true);
    console.log(value);
    let array = [];
    console.log(value);

    data
      .filter((el) => el.type.includes(value))
      .map((filterName) => {
        return [array.push(filterName), setFilterData(array)];
      });
  };

  const filterRelation = (value) => {
    setResetbtn(true);
    let array = [];
    console.log(value);
    console.log(data);
    data
      .filter((el) => el.relation.includes(value))
      .map((filterName) => {
        return [array.push(filterName), setFilterData(array)];
      });
  };

  const reset = () => {
    setFilterData(data);
    setResetbtn(false);
  };
  return (
    <div className="container-rencontre">
      <Navbar />
      <h1 className="title-rencontre">Rencontre</h1>
      <div className="filter">
        <Select
          defaultValue="Type"
          style={{ width: 120, marginRight: "20px" }}
          onChange={filterMenager}
        >
          <Option value="ménager">Ménager</Option>
          <Option value="lego">Lego</Option>
          <Option value="droïde">Droïd</Option>
          <Option value="autobot">Autobot</Option>
          <Option value="drone">Drone</Option>
        </Select>

        <Select
          defaultValue="Relation"
          style={{ width: 120, marginLeft: "20px" }}
          onChange={filterRelation}
        >
          <Option value="galactique">Galactique</Option>
          <Option value="électrique">Electrique</Option>
          <Option value="bien huilée">Bien huilée</Option>
          <Option value="court-circuit">Court-circuité</Option>
        </Select>
        {resetbtn && (
          <Button
            type="primary"
            onClick={reset}
            style={{ width: 120, marginLeft: "40px", backgroundColor: "grey" }}
          >
            Reset
          </Button>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        {filterData &&
          filterData.map((item) => (
            <Cards
              key={item.id}
              title={item.name}
              img={item.picture}
              description={item.biography}
              id={item.id}
              affichage={true}
            />
          ))}
      </div>
    </div>
  );
}

export default Rencontre;
