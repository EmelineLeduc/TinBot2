import React, { useState, useEffect } from "react";
import firebase from "../../utils/firebaseConfig";
import { Select, Button } from "antd";
import Cards from "../Meet/Card/Card";
import Header from "../Header/Header";
import "./Meet.css";

function Meet() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [resetBtn, setResetBtn] = useState(false);

  useEffect(() => {
    const profileDB = firebase.database().ref("profileDB");
    profileDB.on("value", (snapshot) => {
      console.log(snapshot.val());
      let previousProfile = snapshot.val();
      let profile = [];
      for (let id in previousProfile) {
        profile.push({ id, ...previousProfile[id] });
      }
      setData(profile);
      setFilterData(profile);
    });
  }, []);

  const { Option } = Select;

  const filterType = (value) => {
    setResetBtn(true);
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
    setResetBtn(true);
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
    setResetBtn(false);
  };
  return (
    <div className="rencontre-container">
      <Header />
      <h1 className="rencontre-title">Rencontre</h1>
      <div className="filter">
        <Select
          defaultValue="Type"
          style={{ width: 120, marginRight: "20px" }}
          onChange={filterType}
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
        {resetBtn && (
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
              display={true}
            />
          ))}
      </div>
    </div>
  );
}

export default Meet;
