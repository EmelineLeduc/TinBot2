import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        id={props.id}
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
        {props.display ? (
          <Link to={url}>
            <Button
              type="primary"
              style={{
                marginTop: "20px",
                backgroundColor: "#07172e",
                borderRadius: "8px",
              }}
            >
              Voir
            </Button>
          </Link>
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
      {modal && <ModalContact visible={ok} />}
    </div>
  );
}

export default Cards;
