import React, { useState } from "react";
import { Modal, Input } from "antd";
import Popup from "./Popup";

function ModalContact(props) {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [popup, setPopup] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
    setPopup(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { TextArea } = Input;

  return (
    <>
      <Modal
        title="Vous y êtes presque !"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <TextArea rows={4} placeholder="Ecrivez votre plus beau message !" />
      </Modal>
      {popup && <Popup pop={popup} />}
    </>
  );
}

export default ModalContact;
