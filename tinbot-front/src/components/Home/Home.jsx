import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Form from "../Form";
import TypeWriting from "./TypeWriting";
import { Modal, Button } from "antd";
import Flame from "./Img/logo.png";

import "./Home.css";

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container-home">
      <Navbar />
      <div className='title-container'>
      <h1 className="title-appli">
        Tinb
        <span>
          <img className="logo" src={Flame} alt="flame" />
        </span>
        t
      </h1>
      </div>
      <div className="typewriting">
        <h3 className="search-text">Tu cherches un : </h3>
        <TypeWriting />
      </div>
      <div className="div-button">
      <Button onClick={showModal} size={"large"} id="buttonHome">Inscris-toi</Button>
      </div>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form/>
      </Modal>
    </div>
  );
}
export default Home;
