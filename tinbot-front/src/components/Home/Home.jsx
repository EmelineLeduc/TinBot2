import React, { useState } from "react";
import { Modal, Button } from "antd";
import Header from "../Header/Header";
import TypeWriting from "./TypeWriting";
import SignIn from "./SignIn/SignIn";
import "./Home.css";
import Flame from "./assets/logo.png";

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
    <div className="home-container">
      <Header />
      <div className="home-title-container">
        <h1 className="home-title">
          Tinb
          <span>
            <img className="home-logo" src={Flame} alt="flame" />
          </span>
          t
        </h1>
      </div>
      <div className="home-typewriting">
        <h3 className="home-search-text">Tu cherches un : </h3>
        <TypeWriting />
      </div>
      <div className="home-button-container">
        <Button onClick={showModal} size={"large"} id="home-button">
          Inscris-toi
        </Button>
      </div>
      <Modal
        className="test"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <SignIn />
      </Modal>
    </div>
  );
}
export default Home;
