import React from "react";
import { Card } from "antd";

function Cards(props) {
  const { Meta } = Card;
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
        <Meta title={props.title} description={props.description} />
      </Card>
    </div>
  );
}

export default Cards;
