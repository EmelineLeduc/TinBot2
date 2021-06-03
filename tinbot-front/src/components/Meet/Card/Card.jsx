import React, { useState } from "react";
import { Button, Card } from "antd";
import ModalContact from "./ModalContact";

function Cards(props) {
  const [modal, setModal] = useState(false);
  const [ok, setOk] = useState(true);
  const { Meta } = Card;
  const url = `/${props.id}`;

  const handleClick = () => {
    setModal(!modal);
    setOk(!ok);
  };

  return (
    <div>
      <Card
        hoverable
        style={{ width: 280, margin: "15px", minHeight: 390 }}
        cover={
          <img
            alt="example"
            style={{ maxHeight: "200px", minHeight: "200px" }}
            src={props.img}
          />
        }
      >
        <Meta
          style={{ maxHeight: "150px", minHeight: "140px" }}
          title={props.title}
          description={props.description}
        />
        {props.affichage ? (
          <Button
            type="primary"
            style={{
              marginTop: "20px",
              backgroundColor: "#07172e",
              borderRadius: "8px",
            }}
          >
            <a style={{ textDecoration: "none", color: "white" }} href={url}>
              Voir
            </a>{" "}
          </Button>
        ) : (
          <Button
            type="primary"
            style={{
              marginTop: "20px",
              backgroundColor: "#07172e",
              borderRadius: "8px",
            }}
            onClick={handleClick}
          >
            Contacter
          </Button>
        )}
      </Card>
      {modal && (
        <ModalContact
          visible={ok}
          // changeVisibility={(visibles) => setOk(visibles)}
        />
      )}
    </div>
  );
}

export default Cards;
