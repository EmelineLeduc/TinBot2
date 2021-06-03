/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { notification, Space } from "antd";

const Context = React.createContext({ name: "Default" });

const Popup = (props) => {
  const [api, contextHolder] = notification.useNotification();
  const [pop, setPop] = useState(props.popup);

  const openNotification = (placement) => {
    api.info({
      message: `Message envoyé.`,
      description: (
        <Context.Consumer>{({ name }) => `Bonne, ${name}!`}</Context.Consumer>
      ),
      placement,
    });
  };

  useEffect(() => {
    const affichage = pop !== false;
    if (affichage) {
      openNotification("bottomLeft");
    }
  }, [pop]);

  return (
    <Context.Provider value={{ name: "chance" }}>
      {contextHolder}
      <Space></Space>
    </Context.Provider>
  );
};

export default Popup;
