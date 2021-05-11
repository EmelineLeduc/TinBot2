import React from "react";
import Navbar from "../Navbar/Navbar";
import TypeWriting from "./TypeWriting";
import { Button } from "antd";
import Flame from "./Img/logo.png";

import "./Home.css";
function Home() {
  return (
    <div className="container-home">
      <Navbar />
      <h1 className="title-appli">
        Tinb
        <span>
          <img className="logo" src={Flame} alt="flame" />
        </span>
        t
      </h1>
      <div className="typewriting">
        <h3 className="search-text">Tu cherches un : </h3>
        <TypeWriting />
      </div>

      <Button type="primary" size={"large"} id="buttonHome">
        <a href="/rencontres" id="button-link">
          Inscris-toi
        </a>
      </Button>
    </div>
  );
}
export default Home;
